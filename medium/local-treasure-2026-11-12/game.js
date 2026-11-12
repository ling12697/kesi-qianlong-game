(() => {
  const arts = [
    { name: '故宫博物院藏 1', src: 'assets/artworks/palace-museum-1.jpg', thumb: 'assets/artwork-cards/01-palace-museum-1.png' },
    { name: '故宫博物院藏 2', src: 'assets/artworks/palace-museum-2.jpg', thumb: 'assets/artwork-cards/02-palace-museum-2.png' },
    { name: '清华大学藏', src: 'assets/artworks/tsinghua-university-detail.jpg', thumb: 'assets/artwork-cards/03-tsinghua-university.png' }
  ];
  // Each crop is measured against the supplied full-resolution photograph.
  // Retain the original ground: color-based removal used to erase fine threads.
  // Recognizable figures and objects, with enough surrounding context to locate.
  // Every sample is a direct crop from the supplied photograph.
  const levels = [
    [
      { label: '红衣坐佛与背光', art: 0, crop: { x: .190, y: .495, w: .200, h: .115 } },
      { label: '中尊红衣佛像', art: 1, crop: { x: .400, y: .327, w: .200, h: .120 } },
      { label: '蓝白背光佛像', art: 2, crop: { x: .400, y: .318, w: .230, h: .120 } }
    ],
    [
      { label: '琵琶护法与祥云', art: 0, crop: { x: .620, y: .710, w: .260, h: .180 } },
      { label: '左上飞天群像', art: 1, crop: { x: .070, y: .160, w: .370, h: .135 } },
      { label: '展翅飞天与彩云', art: 2, crop: { x: .110, y: .190, w: .370, h: .110 } }
    ],
    [
      { label: '护法与祥云', art: 0, crop: { x: .166, y: .750, w: .180, h: .081 } },
      { label: '左下僧人群像', art: 1, crop: { x: .120, y: .568, w: .285, h: .165 } },
      { label: '中央花瓶与花束', art: 2, crop: { x: .395, y: .512, w: .235, h: .130 } }
    ]
  ];
  levels.flat().forEach(question => { question.target = { ...question.crop }; });
  const $ = id => document.getElementById(id);
  const images = arts.map(art => { const image = new Image(); image.src = art.src; return image; });
  const cards = $('artChoices');
  const clueDeck = $('clueDeck');
  let level = 0, n = 0, locked = false, correct = 0;

  arts.forEach((art, i) => {
    const card = document.createElement('article');
    card.className = 'art-card'; card.dataset.art = i; card.tabIndex = 0; card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `选择${art.name}`);
    card.innerHTML = `<span class="card-number">${['①', '②', '③'][i]}</span><span class="thumb-frame"><img src="${art.thumb}" alt="${art.name}完整画面（原图等比例标准展示）" draggable="false"><i class="source-mark" aria-hidden="true"></i><button class="zoom-art" type="button" aria-label="放大查看${art.name}">⌕</button></span><span class="card-name">${art.name}</span>`;
    card.addEventListener('click', event => { if (!event.target.closest('.zoom-art')) answer(i, card); });
    card.addEventListener('keydown', event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); answer(i, card); } });
    card.querySelector('.zoom-art').addEventListener('click', event => { event.stopPropagation(); $('artZoom').classList.remove('motif-zoom'); $('zoomImage').alt = art.name + '完整画面'; $('zoomImage').src = art.src; $('zoomLabel').textContent = art.name; $('artZoom').hidden = false; });
    cards.append(card);
  });

  function originalCrop(question) {
    const image = images[question.art], crop = question.crop;
    const canvas = document.createElement('canvas');
    canvas.width = Math.round(image.naturalWidth * crop.w);
    canvas.height = Math.round(image.naturalHeight * crop.h);
    canvas.getContext('2d').drawImage(image,
      Math.round(image.naturalWidth * crop.x), Math.round(image.naturalHeight * crop.y),
      canvas.width, canvas.height, 0, 0, canvas.width, canvas.height);
    return canvas;
  }

  // Render once at the final physical pixel size. Sharpen only existing opaque
  // detail; transparent edges never contribute dark halos to the result.
  function renderClue(canvas, source, cssWidth, cssHeight) {
    const ratio = Math.min(3, Math.max(2, window.devicePixelRatio || 1));
    canvas.width = Math.max(1, Math.round(cssWidth * ratio));
    canvas.height = Math.max(1, Math.round(cssHeight * ratio));
    canvas.style.width = `${cssWidth}px`;
    canvas.style.height = `${cssHeight}px`;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    ctx.imageSmoothingEnabled = true; ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(source, 0, 0, canvas.width, canvas.height);
    const frame = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const original = new Uint8ClampedArray(frame.data), out = frame.data;
    const radius = Math.max(1, Math.round(ratio * .65));
    for (let y = radius; y < canvas.height - radius; y++) {
      for (let x = radius; x < canvas.width - radius; x++) {
        const i = (y * canvas.width + x) * 4;
        if (original[i + 3] < 245) continue;
        const neighbors = [i - radius * 4, i + radius * 4,
          i - radius * canvas.width * 4, i + radius * canvas.width * 4];
        if (neighbors.some(j => original[j + 3] < 245)) continue;
        for (let c = 0; c < 3; c++) {
          const blur = neighbors.reduce((sum, j) => sum + original[j + c], original[i + c] * 4) / 8;
          const detail = original[i + c] - blur;
          // Cap the correction so textile grain and JPEG noise stay restrained.
          out[i + c] = original[i + c] + (Math.abs(detail) > 2 ? Math.max(-18, Math.min(18, detail * .85)) : 0);
        }
      }
    }
    ctx.putImageData(frame, 0, 0);
  }

  const clueSources = new WeakMap();
  function fitClues() {
    clueDeck.querySelectorAll('.clue-item').forEach(item => {
      const canvas = item.querySelector('canvas'), source = clueSources.get(canvas);
      if (!source) return;
      const heading = item.querySelector('.clue-heading'), state = item.querySelector('.clue-state');
      const availableWidth = Math.max(1, item.clientWidth - 4);
      const availableHeight = Math.max(1, item.clientHeight - heading.offsetHeight - 4);
      const scale = Math.min(availableWidth / source.width, availableHeight / source.height);
      renderClue(canvas, source, Math.max(1, Math.floor(source.width * scale)), Math.max(1, Math.floor(source.height * scale)));
    });
  }

  function buildClues() {
    clueDeck.replaceChildren();
    levels[level].forEach((question, index) => {
      const item = document.createElement('div'); item.className = `clue-item${index === 0 ? ' active' : ''}`; item.dataset.question = index;
      item.innerHTML = `<span class="clue-heading"><b>纹样 ${index + 1}</b><small>${question.label}</small></span><canvas class="clue-image" role="button" tabindex="0" aria-label="放大查看${question.label}"></canvas><span class="clue-state">待对应</span>`;
      const canvas = item.querySelector('canvas'), source = originalCrop(question);
      clueSources.set(canvas, source);
      const open = () => {
        const preview = document.createElement('canvas');
        const original = originalCrop(question);
        const scale = Math.min(3, 1200 / Math.max(original.width, original.height));
        renderClue(preview, original, original.width * scale, original.height * scale);
        $('zoomImage').src = preview.toDataURL('image/png');
        $('zoomImage').alt = `${question.label}纹样放大图`;
        $('zoomLabel').textContent = `${question.label} · 原图局部（保留完整细线）`;
        $('artZoom').classList.add('motif-zoom');
        $('artZoom').hidden = false;
        $('zoomClose').focus();
      };
      canvas.addEventListener('click', open);
      canvas.addEventListener('keydown', event => {
        if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); open(); }
      });
      clueDeck.append(item);
    });
    fitClues();
  }
  new ResizeObserver(fitClues).observe(clueDeck);

  function update(message = '') {
    $('progressNumber').textContent = `第${level + 1}关 · ${n + 1}/3`;
    $('progressFill').style.width = `${((level * 3 + n) / (levels.length * 3)) * 100}%`;
    $('taskPrompt').textContent = `第 ${level + 1} 关：依次找出三处纹样。`;
    $('feedback').textContent = message || `纹样 ${n + 1}：请在右侧选择来源画作。`;
    $('choiceCaption').textContent = '三张完整佛像 · 逐一匹配左侧纹样';
    cards.querySelectorAll('.art-card').forEach(card => card.classList.remove('selected', 'wrong', 'correct'));
    cards.querySelectorAll('.source-mark').forEach(mark => mark.classList.remove('show'));
    clueDeck.querySelectorAll('.clue-item').forEach((item, index) => item.classList.toggle('active', index === n));
    locked = false;
  }

  function imageContentRect(img) {
    const rect = img.getBoundingClientRect(), ratio = img.naturalWidth / img.naturalHeight, box = rect.width / rect.height;
    if (getComputedStyle(img).objectFit === 'fill') return { x: rect.left, y: rect.top, width: rect.width, height: rect.height };
    let width = rect.width, height = rect.height, x = rect.left, y = rect.top;
    if (box > ratio) { width = rect.height * ratio; x = rect.left + (rect.width - width) / 2; }
    else { height = rect.width / ratio; y = rect.top + (rect.height - height) / 2; }
    return { x, y, width, height };
  }

  function placeMark(card, question) {
    const img = card.querySelector('img'), mark = card.querySelector('.source-mark'), frame = card.querySelector('.thumb-frame');
    const content = imageContentRect(img), frameRect = frame.getBoundingClientRect(), target = question.target;
    mark.style.left = `${content.x - frameRect.left + target.x * content.width}px`;
    mark.style.top = `${content.y - frameRect.top + target.y * content.height}px`;
    mark.style.width = `${target.w * content.width}px`; mark.style.height = `${target.h * content.height}px`;
    mark.classList.add('show');
  }

  function answer(artIndex, card) {
    if (locked) return;
    const question = levels[level][n];
    if (artIndex !== question.art) {
      card.classList.remove('wrong'); void card.offsetWidth; card.classList.add('wrong');
      $('feedback').textContent = '再观察纹样的形状、颜色和细节。'; return;
    }
    locked = true; card.classList.add('correct'); placeMark(card, question);
    const clue = clueDeck.querySelector(`[data-question="${n}"]`); clue.classList.add('found'); clue.querySelector('.clue-state').textContent = '已找到';
    $('feedback').textContent = '找到了！原图中的对应位置已标出。'; correct++;
    setTimeout(() => {
      n++;
      if (n === 3 && level === levels.length - 1) {
        $('progressNumber').textContent = `第${levels.length}关 · 完成`; $('progressFill').style.width = '100%';
        $('taskPrompt').textContent = '三关纹样都已找到'; $('feedback').textContent = '观察完成！';
        $('resultScore').textContent = `完成 ${levels.length} 关，共找到 ${correct} 处纹样`;
        $('resultScreen').hidden = false;
      } else if (n === 3) {
        level++; n = 0; buildClues(); update(`第 ${level} 关完成！继续寻找下一组纹样。`);
      } else update();
    }, 1000);
  }

  Promise.all(images.map(image => image.decode().catch(() => undefined))).then(() => { buildClues(); update(); });
  $('zoomClose').addEventListener('click', () => $('artZoom').hidden = true);
  $('artZoom').addEventListener('click', event => { if (event.target === $('artZoom')) $('artZoom').hidden = true; });
  document.addEventListener('keydown', event => { if (event.key === 'Escape') $('artZoom').hidden = true; });
  $('restartButton').addEventListener('click', () => { $('resultScreen').hidden = true; level = 0; n = 0; correct = 0; buildClues(); update(); });
})();

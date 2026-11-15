function report(text){const nodes=text.split(/(缂丝)/g).map(t=>{if(t!=='缂丝')return document.createTextNode(t);const b=document.createElement('strong');b.className='kesi-highlight';b.textContent=t;return b});document.querySelector('#status').replaceChildren(...nodes)}
const game = document.querySelector('#game');
const board = document.querySelector('#board');
const tray = document.querySelector('#tray');
const reset = document.querySelector('#reset');
const status = document.querySelector('#status');
const items = [
  {id:'statue', name:'观音像', x:.577, y:.667, width:.2516859, ratio:1.5, anchorY:.94, toleranceX:.14, toleranceY:.10},
  {id:'scroll', name:'缂丝佛教挂画', x:804/1254, y:568/1254, width:146/1254, ratio:1363/510, anchorY:.5, toleranceX:.085, toleranceY:.12},
  {id:'altar', name:'供香台', x:637/1254, y:907/1254, width:83.7/1254, ratio:1348/1031, anchorY:.98, toleranceX:.085, toleranceY:.065}
];
let selected = null;
let drag = null;

for (const [index, item] of items.entries()) {
  item.index = index;
  item.piece = document.querySelector('#' + item.id + '-piece');
  item.result = document.querySelector('#' + item.id + '-placed');
  item.target = document.querySelector('#' + item.id + '-target');
  for (const element of [item.result, item.target]) {
    element.style.left = item.x * 100 + '%';
    element.style.top = item.y * 100 + '%';
  }
  item.result.style.width = item.width * 100 + '%';
}
function destination(item) {
  const {left, top, width, height} = board.getBoundingClientRect();
  return {x:left + width * item.x, y:top + height * item.y, width:width * item.width};
}
function home(item) {
  const bounds = tray.getBoundingClientRect();
  const width = Math.min(bounds.width * .29, (bounds.height - 42) / item.ratio);
  const x = bounds.left + bounds.width * (item.index + .5) / items.length;
  const y = bounds.top + (bounds.height - 25 - width * item.ratio) * .5 + width * item.ratio * item.anchorY;
  return {x, y, width};
}
function draw(item, point) {
  const bounds = game.getBoundingClientRect();
  item.piece.style.left = point.x - bounds.left + 'px';
  item.piece.style.top = point.y - bounds.top + 'px';
  item.piece.style.width = point.width + 'px';
}
function layout() {
  for (const item of items) {
    if (drag?.item !== item && !item.piece.hidden) draw(item, home(item));
  }
}
function highlight(item, active) {
  board.classList.toggle('near-' + item.id, active);
}
function select(item) {
  selected = item;
  for (const candidate of items) {
    candidate.target.disabled = candidate !== item;
    candidate.target.classList.toggle('ready', candidate === item);
    board.classList.toggle('hint-' + candidate.id, candidate === item);
    highlight(candidate, candidate === item);
  }
  reset.disabled = !item && items.every(candidate => candidate.result.hidden);
}
function place(item) {
  item.result.hidden = false;
  item.piece.hidden = true;
  board.classList.add(item.id + '-done');
  select(null);
  const remaining = items.find(candidate => candidate.result.hidden);
  report(remaining ? item.name + '已归位。接下来请放置' + remaining.name + '。' : '布置完成。观音像、缂丝佛教挂画和供香台均已归位。');
  (remaining?.piece ?? reset).focus({preventScroll:true});
}
function choose(item) {
  select(item);
  report('已选中' + item.name + '，请点选对应的高亮框。');
  item.target.focus({preventScroll:true});
}
function move(event) {
  if (Math.hypot(event.clientX - drag.startX, event.clientY - drag.startY) > 4) drag.moved = true;
  if (!drag.moved) return;
  const item = drag.item;
  const bounds = board.getBoundingClientRect();
  const inside = event.clientX >= bounds.left && event.clientX <= bounds.right &&
    event.clientY >= bounds.top && event.clientY <= bounds.bottom;
  const goal = destination(item);
  const width = inside ? goal.width : home(item).width;
  const x = event.clientX + drag.offsetX * width;
  const y = event.clientY + drag.offsetY * width;
  drag.near = inside && Math.hypot((x - goal.x) / item.toleranceX, (y - goal.y) / item.toleranceY) <= bounds.width;
  highlight(item, drag.near);
  draw(item, {x, y, width});
}
function finish(event, cancelled) {
  if (drag?.id !== event.pointerId) return;
  if (!cancelled) move(event);
  const {item, near, moved} = drag;
  drag = null;
  item.piece.classList.remove('drag');
  if (!cancelled && near) {
    place(item);
    return;
  }
  select(null);
  layout();
  if (!cancelled && !moved) choose(item);
  else report('请将' + item.name + '移到对应的高亮框内，再松手。');
}
for (const item of items) {
  item.piece.addEventListener('pointerdown', event => {
    if (item.piece.hidden || drag || event.button !== 0) return;
    event.preventDefault();
    select(item);
    const start = home(item);
    drag = {item, id:event.pointerId, startX:event.clientX, startY:event.clientY,
      offsetX:(start.x - event.clientX) / start.width, offsetY:(start.y - event.clientY) / start.width,
      moved:false, near:false};
    item.piece.setPointerCapture(event.pointerId);
    item.piece.classList.add('drag');
  });
  item.piece.addEventListener('pointermove', event => {
    if (drag?.id === event.pointerId) move(event);
  });
  item.piece.addEventListener('pointerup', event => finish(event, false));
  item.piece.addEventListener('pointercancel', event => finish(event, true));
  item.piece.addEventListener('lostpointercapture', event => finish(event, true));
  item.piece.addEventListener('click', event => {
    if (!item.piece.hidden && selected !== item && event.detail === 0) choose(item);
  });
  item.target.addEventListener('click', () => { if (selected === item) place(item); });
}
function restart() {
  for (const item of items) {
    item.result.hidden = true;
    item.piece.hidden = false;
    board.classList.remove(item.id + '-done');
  }
  select(null);
  layout();
  report('三件素材均可拖动。也可点选素材后再点落点。');
}
reset.addEventListener('click', () => {
  restart();
  items[0].piece.focus({preventScroll:true});
});
new ResizeObserver(layout).observe(game);
window.addEventListener('resize', layout);
restart();

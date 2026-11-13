/* Loaded only by the three independent entry pages. */
(()=>{
 const chapter=globalThis.KESI_STANDALONE_CHAPTER,meta=globalThis.KESI_STANDALONE_META;
 if(!Number.isInteger(chapter)||!meta)return;
 const intro=document.getElementById('intro');
 if(intro)intro.innerHTML=`<small>${meta.era}</small><div class="hero">${meta.title}</div><p>${meta.description}</p><p>进度会自动保存在当前浏览器，可随时回来继续。</p><button class="primary" onclick="document.getElementById('intro').close()">进入游戏</button>`;
 function prune(root){
  const buttons=[...(root.matches?.('button[onclick]')?[root]:[]),...(root.querySelectorAll?.('button[onclick]')||[])];
  for(const button of buttons){const match=button.getAttribute('onclick')?.match(/\bswitchCh\(\s*(\d+)\s*\)/);if(match&&+match[1]!==chapter)button.remove();}
 }
 prune(document);
 new MutationObserver(records=>{for(const record of records)for(const node of record.addedNodes)if(node.nodeType===1)prune(node)}).observe(document.body,{childList:true,subtree:true});
 document.documentElement.classList.remove('standalone-loading');
})();

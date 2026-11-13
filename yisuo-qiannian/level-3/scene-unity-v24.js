/* Automatic lids leave the player's attention on matching and dispatching materials. */
let v24LidTimer=0;
const v24MaterialMarkupBefore=handsMaterialMarkup;
handsMaterialMarkup=function(i){let c=craft(),done=hands().materials[i]||[];c.boxes[i]=done.length<3||c.autoClosing===i;let html=v24MaterialMarkupBefore(i);html=html.replace(/ data-craft-drag="lid"/g,'').replace(/ onclick="craftLid\([^)]*\)"/g,'').replace(/aria-label="(?:合上|打开)([^"]*)料箱"/g,'aria-label="$1丝料箱"').replaceAll('开箱配料','按样配料').replaceAll('丝料拖入箱内 · 配齐后合盖','丝料放齐后自动合盖').replaceAll('向上拖动开盖 · 也可点击','丝料齐备 · 箱盖已合').replaceAll('丝料齐了，向下拖动合盖。','丝料齐了，正在合盖。').replaceAll('扣好箱，','丝料已备齐，');return html};
const v24MaterialBefore=handsMaterial;
handsMaterial=function(i,k){let a=hands().materials[i]||[];if(a.includes(k))return;let c=craft();c.boxes[i]=true;let last=a.length===2;if(last)c.autoClosing=i;v24MaterialBefore(i,k);if(last){let owner=easy;clearTimeout(v24LidTimer);v24LidTimer=setTimeout(()=>{if(easy!==owner)return;c.boxes[i]=false;delete c.autoClosing;easySave();if(handsPane?.kind==='material'&&handsPane.index===i){easyRender();document.querySelector('.craft-material-chest')?.classList.add('craft-box-change')}},720)}};
const v24RestBefore=handsMaterialRest;
handsMaterialRest=function(i){if(!hands().fast)return;craft().boxes[i]=true;v24RestBefore(i);craft().boxes[i]=false;delete craft().autoClosing;easyRender()};
const v24RenderBefore=easyRender;
easyRender=function(){v24RenderBefore();if(s.ch!==0)return;let scene=document.querySelector('.easy-scene');if(!scene)return;if(easy.step===0&&westState().westStage==='courtyard')scene.querySelector('.west-intent')?.remove();scene.querySelectorAll('.court-village').forEach(el=>{el.innerHTML='<small class="v24-place-note">以今地名标注</small>';el.setAttribute('aria-label','陆墓张花村木牌，以今地名标注')});scene.querySelectorAll('.west-document-bag,.west-folded-order').forEach(el=>el.classList.remove('v22-next'));scene.querySelectorAll('.craft-material-chest').forEach(el=>{el.classList.remove('v22-next');el.tabIndex=-1;el.setAttribute('aria-disabled','true')})};
easyRender();

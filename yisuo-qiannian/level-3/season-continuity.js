/* 门前河道由两张地图共同表现，人物从石桥通过。 */
roadNodes.gbridge=[20.2,44.4];
const gateRoadLink=roadLinks.findIndex(([a,b])=>a==='g'&&b==='g1');
if(gateRoadLink>=0)roadLinks.splice(gateRoadLink,1,['g','gbridge'],['gbridge','g1']);
const continuityPriorRender=easyRender;
const seasonalPreloads=new Set();
function warmSeasonImages(season){for(let n of [season,Math.min(3,season+1)])for(let prefix of ['gusu','court']){let url='clean-'+prefix+'-'+['spring','summer','autumn','winter'][n]+'.lite.webp';if(seasonalPreloads.has(url))continue;seasonalPreloads.add(url);let picture=new Image();picture.src=url}}
easyRender=function(){continuityPriorRender();if(s.ch!==0)return;let scene=document.querySelector('.easy-scene');if(!scene)return;let season=Math.max(0,Math.min(3,easy.seasonStage||0));scene.dataset.season=['spring','summer','autumn','winter'][season];scene.dataset.forecourt='canal-and-stone-bridge';warmSeasonImages(season)};
easyRender();

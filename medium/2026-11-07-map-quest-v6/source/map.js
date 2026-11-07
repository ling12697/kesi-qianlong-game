window.createPanZoom=function createPanZoom({windowEl,contentEl,onZoom,min=.85,max=2.7}){
  let scale=1,x=0,y=0,points=new Map(),start=null,pinch=null,moved=false;
  const clamp=(n,a,b)=>Math.max(a,Math.min(b,n));
  const point=e=>{const r=windowEl.getBoundingClientRect();return{x:e.clientX-r.left,y:e.clientY-r.top}};
  function paint(){const r=windowEl.getBoundingClientRect();const limitX=Math.max(0,(r.width*(scale-1))/2),limitY=Math.max(0,(r.height*(scale-1))/2);x=clamp(x,-limitX,limitX);y=clamp(y,-limitY,limitY);contentEl.style.transform=`translate3d(${x}px,${y}px,0) scale(${scale})`;onZoom?.(scale)}
  function zoom(next,ax=windowEl.clientWidth/2,ay=windowEl.clientHeight/2){const before=scale,ox=windowEl.clientWidth/2,oy=windowEl.clientHeight/2;scale=clamp(next,min,max);const q=scale/before;x=ax-ox-(ax-ox-x)*q;y=ay-oy-(ay-oy-y)*q;paint()}
  function reset(){scale=1;x=0;y=0;paint()}
  windowEl.addEventListener('pointerdown',e=>{if(e.target.closest('button,.map-marker'))return;windowEl.setPointerCapture?.(e.pointerId);const p=point(e);points.set(e.pointerId,p);moved=false;if(points.size===1)start={p,x,y};if(points.size===2){const a=[...points.values()];pinch={distance:Math.hypot(a[0].x-a[1].x,a[0].y-a[1].y),scale,x,y,center:{x:(a[0].x+a[1].x)/2,y:(a[0].y+a[1].y)/2}};start=null}windowEl.classList.add('is-grabbing')});
  windowEl.addEventListener('pointermove',e=>{if(!points.has(e.pointerId))return;const p=point(e);points.set(e.pointerId,p);if(points.size>=2&&pinch){const a=[...points.values()],d=Math.hypot(a[0].x-a[1].x,a[0].y-a[1].y),c={x:(a[0].x+a[1].x)/2,y:(a[0].y+a[1].y)/2};if(Math.abs(d-pinch.distance)>3)moved=true;const next=clamp(pinch.scale*d/pinch.distance,min,max),q=next/pinch.scale,ox=windowEl.clientWidth/2,oy=windowEl.clientHeight/2;scale=next;x=c.x-ox-(pinch.center.x-ox-pinch.x)*q;y=c.y-oy-(pinch.center.y-oy-pinch.y)*q;paint();e.preventDefault();return}if(start){const dx=p.x-start.p.x,dy=p.y-start.p.y;if(Math.hypot(dx,dy)>5)moved=true;x=start.x+dx;y=start.y+dy;paint();e.preventDefault()}},{passive:false});
  const end=e=>{points.delete(e.pointerId);if(points.size<2)pinch=null;if(!points.size){start=null;windowEl.classList.remove('is-grabbing')}};windowEl.addEventListener('pointerup',end);windowEl.addEventListener('pointercancel',end);
  windowEl.addEventListener('wheel',e=>{e.preventDefault();const p=point(e);zoom(scale*(e.deltaY<0?1.12:.89),p.x,p.y)},{passive:false});
  return{zoom,reset,getScale:()=>scale};
};

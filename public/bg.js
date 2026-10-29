/* Animated network background: <section data-net="light|dark"> gets a canvas of drifting nodes and links */
function initNet(){
  const rm=matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.querySelectorAll('[data-net]').forEach(sec=>{
    if(sec.querySelector(':scope>.net-canvas'))return;
    const dark=sec.dataset.net==='dark', cv=document.createElement('canvas'); cv.className='net-canvas'; sec.prepend(cv);
    const ctx=cv.getContext('2d'), col=dark?'127,211,255':'19,137,206'; let w=0,h=0,pts=[],run=false,raf=0;
    const size=()=>{const r=sec.getBoundingClientRect(),dpr=Math.min(devicePixelRatio||1,2);w=r.width;h=r.height;cv.width=w*dpr;cv.height=h*dpr;ctx.setTransform(dpr,0,0,dpr,0,0);
      const n=Math.max(14,Math.min(60,Math.round(w*h/20000)));pts=Array.from({length:n},()=>({x:Math.random()*w,y:Math.random()*h,vx:(Math.random()-.5)*.35,vy:(Math.random()-.5)*.35}));};
    const frame=()=>{ctx.clearRect(0,0,w,h);
      for(const p of pts){p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>w)p.vx*=-1;if(p.y<0||p.y>h)p.vy*=-1;}
      for(let i=0;i<pts.length;i++){const a=pts[i];
        for(let j=i+1;j<pts.length;j++){const b=pts[j],d=Math.hypot(a.x-b.x,a.y-b.y);
          if(d<150){ctx.strokeStyle=`rgba(${col},${(1-d/150)*(dark?.35:.2)})`;ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.stroke();}}
        ctx.fillStyle=`rgba(${col},${dark?.8:.45})`;ctx.beginPath();ctx.arc(a.x,a.y,2,0,7);ctx.fill();}
      if(run&&!rm)raf=requestAnimationFrame(frame);};
    size();frame();
    new IntersectionObserver(e=>{run=e[0].isIntersecting;cancelAnimationFrame(raf);if(run&&!rm)frame();}).observe(sec);
    new ResizeObserver(()=>{size();cancelAnimationFrame(raf);frame();}).observe(sec);
  });
}
initNet();

import{r as i,j as e}from"./app-DfMgKXZB.js";import{u as t}from"./index-D_6myqfj.js";function y(){const{ref:a,inView:o}=t({triggerOnce:!0,threshold:.1,delay:200}),{ref:s,inView:l}=t({triggerOnce:!0,threshold:.1,delay:300}),{ref:d,inView:c}=t({triggerOnce:!0,threshold:.1,delay:400}),{ref:p,inView:f}=t({triggerOnce:!0,threshold:.1,delay:500}),{ref:u,inView:h}=t({triggerOnce:!0,threshold:.1,delay:600}),n=["storage/videos/home/hero-background1.mp4","storage/videos/home/hero-background2.mp4","storage/videos/home/hero-background3.mp4"],[r,m]=i.useState(0),g=i.useRef(null),x=()=>{m(b=>(b+1)%n.length)};return e.jsxs("div",{id:"home",className:"relative flex h-screen w-full items-center justify-center text-center bg-center bg-cover",style:{backgroundImage:'url("storage/images/home/hero-background.png")'},children:[e.jsx("video",{ref:g,className:"absolute top-0 left-0 w-full h-full object-cover",src:n[r],autoPlay:!0,loop:!1,muted:!0,playsInline:!0,onEnded:x},r),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-black/95 via-black/75 to-black/55"}),e.jsxs("div",{className:"relative z-10 flex flex-col items-center gap-y-14 xl:gap-y-8 2xl:gap-y-14 px-6 pt-40 md:pt-20 text-pure-white",children:[e.jsx("h1",{ref:a,className:`
            font-cormorant text-[48px] font-light leading-none md:text-[96px]
            ${o?"fade-in-up-visible":"fade-in-up-initial"}
          `,children:"A Taste of Spain, Served with Soul."}),e.jsx("p",{ref:s,className:`
            font-outfit text-[18px] font-extralight leading-none md:text-[32px] max-w-4xl
            ${l?"fade-in-up-visible":"fade-in-up-initial"}
          `,children:"Authentic Spanish tapas, wines, and culinary passion right in the heart of the city."}),e.jsxs("div",{className:"mt-4 flex gap-4 flex-col",children:[e.jsx("a",{href:"#reservations",ref:d,className:`
            font-cormorant md:hidden block border-1 border-deep-red bg-transparent px-2 py-3 text-[24px]
                     font-light leading-none tracking-[.05em] transition-colors 
                     bg-deep-red-hover hover:bg-opacity-75 md:text-[40px]
            ${c?"fade-in-up-visible":"fade-in-up-initial"}
          `,children:"Reserve a Table"}),e.jsx("a",{href:"#menu",ref:p,className:`
            font-cormorant border-1 border-deep-red bg-transparent px-2 py-3 text-[24px]
                     font-light leading-none tracking-[.05em] transition-colors 
                     bg-deep-red-hover hover:bg-opacity-75 md:text-[40px]
            ${f?"fade-in-up-visible":"fade-in-up-initial"}
          `,children:"View Menu"})]}),e.jsx("p",{ref:u,className:`
            font-outfit mt-4 max-w-7xl opacity-65 text-[14px] font-thin leading-snug md:text-[17px]
            ${h?"fade-in-up-visible":"fade-in-up-short-initial"}
          `,children:"Welcome to Sabrina’s, where modern elegance meets timeless Spanish flavor. Inspired by the vibrant tapas culture of Barcelona, we invite you to indulge in artisanal small plates, fine wines, and a warm, intimate atmosphere."})]})]})}export{y as default};

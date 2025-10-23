import{r as n,j as e}from"./app-Ctv3DCth.js";import{u as t}from"./index-Ll7DX_xP.js";const l=["storage/images/home/our-story-image1.webp","storage/images/home/our-story-image2.webp","storage/images/home/our-story-image3.webp","storage/images/home/our-story-image4.webp"];function k(){const[s,o]=n.useState(0);n.useEffect(()=>{const m=setInterval(()=>{o(a=>(a+1)%l.length)},5e3);return()=>clearInterval(m)},[]);const{ref:d,inView:c}=t({triggerOnce:!0,threshold:.1,delay:100}),{ref:f,inView:h}=t({triggerOnce:!0,threshold:.1,delay:500}),{ref:r,inView:i}=t({triggerOnce:!0,threshold:.1,delay:500}),{ref:x,inView:g}=t({triggerOnce:!0,threshold:.1,delay:200}),{ref:u,inView:p}=t({triggerOnce:!0,threshold:.1,delay:300}),{ref:w,inView:y}=t({triggerOnce:!0,threshold:.1,delay:400}),{ref:b,inView:v}=t({triggerOnce:!0,threshold:.1,delay:400}),{ref:j,inView:N}=t({triggerOnce:!0,threshold:.1,delay:450});return e.jsx("section",{id:"about-us",className:"bg-deep-red h-full md:h-screen flex justify-center items-center",children:e.jsxs("div",{className:"flex flex-col md:flex-row py-20 md:py-0 px-2 lg:px-10 xl:px-20 2xl:px-40",children:[e.jsx("div",{className:"relative w-full md:w-1/2 pr-4 md:pr-10 lg:pr-15 p-4 py-0",children:e.jsxs("div",{ref:d,className:`
                    relative h-70 md:h-full
                    ${c?"fade-in-left-visible":"fade-in-left-initial"}
                  `,children:[l.map((m,a)=>e.jsx("img",{src:m,alt:`Sabrina's story image ${a+1}`,className:`
                    absolute inset-0 w-full h-full object-cover
                    transition-opacity duration-1000 ease-in-out
                    ${a===s?"opacity-100":"opacity-0"}
                  `},a)),e.jsxs("h2",{ref:f,className:`
                  font-milyuna absolute top-10 right-15 translate-x-1/2
                                text-[128px] md:text-[112px] lg:text-[128px] font-normal leading-none tracking-[.05em] hidden md:block
                  ${h?"fade-in-left-visible":"fade-in-left-initial"}
                `,children:[e.jsx("span",{className:"text-pure-white",children:"Ou"}),e.jsx("span",{className:"text-black",children:"r"})]}),e.jsx("h2",{ref:r,className:`
                  font-milyuna absolute bottom-4 left-1/2 -translate-x-1/2
                                text-pure-white text-[96px] font-normal leading-none tracking-[.05em] md:hidden
                  ${i?"fade-in-left-visible":"fade-in-left-initial"}
                `,children:"Our"})]})}),e.jsxs("div",{className:"w-full md:w-1/2 p-8 py-0 pt-0 md:pt-0 pl-8 md:pl-10 lg:pl-15 flex flex-col gap-5 md:gap-5 lg:gap-0 xl:gap-4 2xl:gap-14 text-black",children:[e.jsx("h2",{ref:b,className:`
                  font-milyuna text-[96px] font-normal leading-none tracking-[.05em]
                         self-end md:hidden
                  ${v?"fade-in-right-visible":"fade-in-right-initial"}
                `,children:"Story"}),e.jsx("p",{ref:x,className:`
                  font-outfit text-white text-left text-[14px] md:text-[18px] lg:text-[21px]
                       font-light leading-snug tracking-[.05em] mt-4 md:mt-0
                  ${g?"fade-in-right-visible":"fade-in-right-initial"}
                `,children:"At Sabrina’s, every dish tells a story—one inspired by the vibrant flavors of Spain’s coastal kitchens and bustling markets. Founded by culinary enthusiasts who fell in love with traditional tapas culture, our restaurant celebrates community, authenticity, and artistry on every plate."}),e.jsx("h2",{ref:w,className:`
                  font-milyuna text-[128px] md:text-[112px] lg:text-[128px] font-normal leading-none tracking-[.05em]
                         text-start my-8 hidden md:block
                  ${y?"fade-in-right-visible":"fade-in-right-initial"}
                `,children:"Story"}),e.jsx("div",{className:"w-2/3 md:w-1/2 mt-8 md:mt-0 self-end",children:e.jsx("p",{ref:u,className:`
                  font-outfit text-pure-white text-right md:text-left text-[14px] md:text-[18px] lg:text-[21px]
                  font-light leading-snug tracking-[.05em]
                  ${p?"fade-in-right-visible":"fade-in-right-initial"}
                `,children:"Each meal invites you to slow down, share, and savor — the Spanish way."})}),e.jsx("div",{className:"w-full md:w-1/2 flex justify-center md:justify-start mt-8 md:mt-0",children:e.jsx("button",{ref:j,className:`
                  font-outfit text-pure-white border-1 border-pure-white bg-transparent
                                 p-2 md:p-3 text-[22px] md:text-[18px] lg:text-[22px] font-light leading-none tracking-[.05em]
                                 transition-colors hover:bg-white text-deep-red-hover
                  ${N?"fade-in-right-visible":"fade-in-right-initial"}
                `,children:"Contact Us"})})]})]})})}function O(){const[s,o]=n.useState(0);n.useEffect(()=>{const r=setInterval(()=>{o(i=>(i+1)%l.length)},5e3);return()=>clearInterval(r)},[]);const{ref:d,inView:c}=t({triggerOnce:!0,threshold:.1}),{ref:f,inView:h}=t({triggerOnce:!0,threshold:.1,delay:200});return e.jsx("section",{className:"bg-deep-red py-12 md:py-20 overflow-x-hidden",children:e.jsxs("div",{className:"container mx-auto flex flex-col md:flex-row",children:[e.jsx("div",{ref:d,className:`relative w-full md:w-1/2 p-4 lg:p-8 ${c?"fade-in-left-visible":"fade-in-left-initial"}`,children:e.jsxs("div",{className:"relative w-full aspect-[4/5] drop-shadow-2xl",children:[l.map((r,i)=>e.jsx("img",{src:r,alt:`Sabrina's story image ${i+1}`,className:`
                  absolute inset-0 w-full h-full object-cover
                  transition-opacity duration-1000 ease-in-out
                  ${i===s?"opacity-100":"opacity-0"}
                `},i)),e.jsxs("h2",{className:"font-cormorant absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[128px] font-normal leading-none tracking-[.05em] hidden md:block z-10 pointer-events-none",children:[e.jsx("span",{className:"text-pure-white",children:"Ou"}),e.jsx("span",{className:"text-black",children:"r"})]}),e.jsx("h2",{className:"font-cormorant absolute bottom-4 left-1/2 -translate-x-1/2 text-pure-white text-[96px] font-normal leading-none tracking-[.05em] md:hidden z-10",children:"Our"})]})}),e.jsx("div",{ref:f,className:`w-full md:w-1/2 p-8 flex flex-col text-black ${h?"fade-in-right-visible":"fade-in-right-initial"}`})]})})}export{O as OurStoryaaa,k as default};

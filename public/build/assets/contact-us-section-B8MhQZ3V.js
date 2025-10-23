import{a as O,u as E,r as n,j as e}from"./app-DEg4C1Mv.js";import{F as o}from"./form-field-W9YkdxeM.js";import{u as s}from"./index-C_sXPvHG.js";function U(){const{ref:u,inView:x}=s({triggerOnce:!0,threshold:.1,delay:200}),{ref:g,inView:h}=s({triggerOnce:!0,threshold:.1,delay:300}),{ref:p,inView:w}=s({triggerOnce:!0,threshold:.1,delay:400}),{ref:b,inView:v}=s({triggerOnce:!0,threshold:.1,delay:500}),{ref:j,inView:y}=s({triggerOnce:!0,threshold:.1,delay:600}),{ref:N,inView:V}=s({triggerOnce:!0,threshold:.1,delay:500}),{ref:S,inView:k}=s({triggerOnce:!0,threshold:.1,delay:600}),{data:l,setData:r,post:C,processing:I,errors:a,reset:c,wasSuccessful:d}=O({name:"",email:"",message:""}),{props:R}=E(),i=R.flash||{},[m,f]=n.useState(!1);n.useEffect(()=>{if(i.success_message||i.error_message){f(!0);const t=setTimeout(()=>f(!1),5e3);return()=>clearTimeout(t)}},[i]);function $(t){t.preventDefault(),C(route("contact.store"),{preserveScroll:!0,onSuccess:()=>c()})}return n.useEffect(()=>{d&&c()},[d]),e.jsxs("section",{id:"contact-us",className:"bg-cream flex-row w-full items-center justify-center text-black",children:[e.jsxs("div",{className:"container mx-auto",children:[e.jsx("div",{className:"w-full p-10",children:e.jsx("div",{ref:u,className:`
              w-full h-64 bg-cover bg-center
              ${x?"fade-in-up-visible":"fade-in-up-initial"}
            `,style:{backgroundImage:"url('storage/images/home/contact-us-image.webp')"}})}),e.jsxs("div",{className:"w-full py-8 md:py-16 px-4 md:px-10",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-start gap-8 mb-8",children:[e.jsx("div",{className:"w-full md:w-2/3",children:e.jsx("h2",{ref:g,className:`
              font-milyuna font-normal leading-none text-left 
                            text-[72px] sm:text-[96px] md:text-[128px]
              ${h?"fade-in-up-visible":"fade-in-up-initial"}
            `,children:"Contact Us"})}),e.jsx("div",{className:"w-full md:w-1/3",children:e.jsx("p",{ref:p,className:`
              font-outfit font-thin text-base md:text-2xl leading-snug text-center md:text-left
              ${w?"fade-in-up-visible":"fade-in-up-initial"}
            `,children:"Have questions or special requests? We’re here to help. Reach out to Sabrina’s and let us make your visit seamless and memorable."})})]}),e.jsxs("div",{className:"flex flex-col md:flex-row gap-8 md:gap-16 items-start mb-0 md:mb-8",children:[e.jsxs("form",{onSubmit:$,ref:b,id:"contact-form",className:`
                w-full md:w-2/3 flex flex-col gap-6
                ${v?"fade-in-up-visible":"fade-in-up-initial"}
              `,children:[e.jsx(o,{label:"Name",id:"contact-name",type:"text",placeholder:"Ex: Samuel Iglesias",value:l.name,onChange:t=>r("name",t.target.value)}),a.name&&e.jsx("div",{className:"text-red-500",children:a.name}),e.jsx(o,{label:"Email",id:"contact-email",type:"email",placeholder:"email@example.com",value:l.email,onChange:t=>r("email",t.target.value)}),a.email&&e.jsx("div",{className:"text-red-500",children:a.email}),e.jsx(o,{label:"Your message",id:"contact-message",placeholder:"How can we help you...?",value:l.message,onChange:t=>r("message",t.target.value)}),a.message&&e.jsx("div",{className:"text-red-500",children:a.message})]}),m&&e.jsx("div",{className:`
                        fixed bottom-10 z-50 right-10 p-4 rounded-lg shadow-lg text-white font-outfit
                        transition-opacity duration-300
                        ${i.success_message?"bg-deep-red":"bg-gray-700"}
                        ${m?"opacity-100":"opacity-0"}
                    `,children:i.success_message||i.error_message}),e.jsx("div",{className:"w-full max-h-full md:w-1/3 flex justify-center items-end md:justify-start pt-0 md:pt-8",children:e.jsxs("button",{type:"submit",form:"contact-form",disabled:I,ref:j,className:`
                flex items-center gap-4 bg-transparent border-1 border-black text-black
                                font-outfit font-normal text-2xl md:text-3xl px-5 py-3
                                transition-colors hover:bg-black hover:text-white
                ${y?"fade-in-up-visible":"fade-in-up-initial"}
              `,children:["Send",e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[e.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),e.jsx("polyline",{points:"12 5 19 12 12 19"})]})]})})]})]}),e.jsx("div",{className:"text-center mb-4",children:e.jsx("p",{ref:N,className:`
                font-outfit text-gray-500 font-light text-sm md:text-2xl leading-relaxed
                ${V?"fade-in-up-visible":"fade-in-up-initial"}
              `,children:"+00 1 212 555 1234   |    Sabrina’s Spanish Cuisine, 123 Calle del Sol, Worcester, MA"})})]}),e.jsx("div",{ref:S,className:`w-full h-auto
              ${k?"fade-in-up-visible":"fade-in-up-initial"}
            `,children:e.jsx("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2959.489112423588!2d-71.8043003239327!3d42.26834117120304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e4066c0d8b0e8b%3A0x296f30d0d866a237!2sWorcester%2C%20MA%2C%20USA!5e0!3m2!1sen!2sca!4v1678886400000",width:"100%",height:"450",style:{border:0},allowFullScreen:!1,loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"})})]})}export{U as default};

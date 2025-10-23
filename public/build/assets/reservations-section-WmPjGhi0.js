import{a as V,u as R,r as o,j as e}from"./app-DEg4C1Mv.js";import{u as i}from"./index-C_sXPvHG.js";import{F as l}from"./form-field-W9YkdxeM.js";function E(){const{ref:x,inView:u}=i({triggerOnce:!0,threshold:.1,delay:200}),{ref:f,inView:h}=i({triggerOnce:!0,threshold:.1,delay:300}),{ref:g,inView:b}=i({triggerOnce:!0,threshold:.1,delay:600}),{ref:v,inView:y}=i({triggerOnce:!0,threshold:.1,delay:700}),{data:s,setData:n,post:j,processing:w,errors:a,reset:d,wasSuccessful:m}=V({name:"",email:"",phone:"",date:"",adults:1,children:0}),{props:N}=R(),r=N.flash||{},[c,p]=o.useState(!1);o.useEffect(()=>{if(r.success_message||r.error_message){p(!0);const t=setTimeout(()=>p(!1),5e3);return()=>clearTimeout(t)}},[r]);function S(t){t.preventDefault(),j(route("reservation.store"),{preserveScroll:!0,onSuccess:()=>d()})}return o.useEffect(()=>{m&&d()},[m]),e.jsx("section",{id:"reservations",className:"bg-cream h-full md:h-screen text-black py-8 md:py-4 px-4 md:px-8",children:e.jsxs("div",{className:"container mx-auto",children:[e.jsx("h2",{ref:x,className:`
            font-milyuna font-normal leading-none tracking-normal 
                       text-center md:text-left text-[48px] sm:text-[64px] md:text-[112px] mb-8
            ${u?"fade-in-up-visible":"fade-in-up-initial"}
          `,children:"Reservations"}),e.jsxs("div",{className:"flex flex-col md:flex-row gap-12 md:gap-10",children:[e.jsx("div",{className:"w-full md:w-1/3 order-1",children:e.jsx("p",{ref:f,className:`
            font-outfit font-thin leading-snug tracking-normal
                           text-center md:text-left text-[14px] md:text-[18px] lg:text-[21px]
            ${h?"fade-in-up-visible":"fade-in-up-initial"}
          `,children:"An intimate dining experience awaits. Secure your spot and enjoy elegant Spanish cuisine, fine wine, and warm hospitality at Sabrina’s."})}),e.jsxs("div",{className:"w-full md:w-2/3 pl-0 md:pl-20 order-2",children:[e.jsxs("form",{ref:g,onSubmit:S,id:"reservations-form",className:`
                flex flex-col gap-2
                ${b?"fade-in-up-visible":"fade-in-up-initial"}
              `,children:[e.jsx(l,{label:"Name",id:"name",value:s.name,type:"text",placeholder:"enter your name",onChange:t=>n("name",t.target.value)}),a.name&&e.jsx("div",{className:"error text-red-500",children:a.name}),e.jsx(l,{label:"Email",id:"email",value:s.email,type:"email",placeholder:"enter your email",onChange:t=>n("email",t.target.value)}),a.email&&e.jsx("div",{className:"error text-red-500",children:a.email}),e.jsx(l,{label:"Phone",id:"phone",value:s.phone,type:"tel",placeholder:"enter your number",onChange:t=>n("phone",t.target.value)}),a.phone&&e.jsx("div",{className:"error text-red-500",children:a.phone}),e.jsx(l,{label:"Date",id:"date",value:s.date,type:"date",placeholder:"Select the date",onChange:t=>n("date",t.target.value)}),a.date&&e.jsx("div",{className:"error text-red-500",children:a.date}),e.jsxs("div",{className:"flex w-full flex-col md:flex-row md:items-center",children:[e.jsx("label",{className:"font-outfit text-[14px] md:text-[18px] lg:text-[21px] font-normal text-left w-full md:w-1/4 mb-1 md:mb-0",children:"Party Size"}),e.jsxs("div",{className:"flex w-full md:w-3/4 gap-4",children:[e.jsx("input",{type:"number",placeholder:"Adults",min:"0",className:`font-outfit text-[14px] md:text-[18px] lg:text-[21px] font-light w-1/2 bg-transparent border-b-1 
                               border-black focus:outline-none focus:border-deep-red py-2 placeholder:text-gray-500`}),e.jsx("input",{type:"number",placeholder:"Children",min:"0",className:`font-outfit text-[14px] md:text-[18px] lg:text-[21px] font-light w-1/2 bg-transparent border-b-1 
                               border-black focus:outline-none focus:border-deep-red py-2 placeholder:text-gray-500`})]})]})]}),c&&e.jsx("div",{className:`
                        fixed bottom-10 right-10 p-4 rounded-lg shadow-lg text-white font-outfit
                        transition-opacity duration-300
                        ${r.success_message?"bg-deep-red":"bg-gray-700"}
                        ${c?"opacity-100":"opacity-0"}
                    `,children:r.success_message||r.error_message})]})]}),e.jsx("div",{className:"mt-12 md:mt-16 flex justify-center md:justify-end",children:e.jsx("button",{type:"submit",disabled:w,form:"reservations-form",ref:v,className:`
            font-milyuna bg-transparent border-1 border-deep-red text-deep-red
            font-normal leading-none tracking-[.05em] p-4 md:p-3
            text-[20px] md:text-[36px] transition-colors bg-deep-red-hover hover:text-white
            ${y?"fade-in-up-visible":"fade-in-up-short-initial"}
          `,children:"Reserve"})})]})})}export{E as default};

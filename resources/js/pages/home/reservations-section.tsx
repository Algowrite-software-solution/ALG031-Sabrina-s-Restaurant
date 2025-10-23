import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { FormField } from '../../components/custom/form-field';
import { useForm, usePage } from '@inertiajs/react';

export default function ReservationsSection() {

  const { ref: h2Ref, inView: h2InView } = useInView({triggerOnce: true, threshold: 0.1, delay: 200,});
  const { ref: paraRef, inView: paraInView } = useInView({triggerOnce: true, threshold: 0.1, delay: 300,});
  const { ref: divRef, inView: divInView } = useInView({triggerOnce: true, threshold: 0.1, delay: 600,});
  const { ref: buttonRef, inView: buttonInView } = useInView({triggerOnce: true, threshold: 0.1, delay: 700,});

  const { data, setData, post, processing, errors, reset, wasSuccessful } = useForm({
        name: '',
        email: '',
        phone: '',
        date: '',
        adults: 1,
        children: 0,
  });
  
  const { props } = usePage();
    
  const flash = (props.flash as { success_message?: string; error_message?: string }) || {};

  const [visible, setVisible] = useState(false);

  useEffect(() => {
      if (flash.success_message || flash.error_message) {
          setVisible(true);
          const timer = setTimeout(() => setVisible(false), 5000);
          return () => clearTimeout(timer);
      }
  }, [flash]);

  function handleSubmit(e: React.FormEvent) {
      e.preventDefault();
      post(route('reservation.store'), {
        preserveScroll: true,
        onSuccess: () => reset(),
    });
  }

  useEffect(() => {
      if (wasSuccessful) {
          reset();
      }
  }, [wasSuccessful]);

  return (
    <section id='reservations' className="bg-cream flex justify-center items-center h-full md:h-screen text-black py-8 md:py-4 px-4 md:px-8">
      <div className="container mx-auto">
        
        <h2 
          ref={h2Ref}
          className={`
            font-milyuna font-normal leading-none tracking-normal 
                       text-center md:text-left text-[48px] sm:text-[64px] md:text-[112px] mb-8
            ${h2InView ? 'fade-in-up-visible' : 'fade-in-up-initial'}
          `}
        >
          Reservations
        </h2>

        <div className="flex flex-col md:flex-row gap-12 md:gap-10">
          
          <div className="w-full md:w-1/3 order-1">
            <p 
          ref={paraRef}
          className={`
            font-outfit font-thin leading-snug tracking-normal
                           text-center md:text-left text-[14px] md:text-[18px] lg:text-[21px]
            ${paraInView ? 'fade-in-up-visible' : 'fade-in-up-initial'}
          `}
        >
              An intimate dining experience awaits. Secure your spot and enjoy elegant Spanish cuisine, 
              fine wine, and warm hospitality at Sabrina’s.
            </p>
          </div>

          <div className="w-full md:w-2/3 pl-0 md:pl-20 order-2">
            <form 
              ref={divRef}
              onSubmit={handleSubmit}
              id="reservations-form"
              className={`
                flex flex-col gap-2
                ${divInView ? 'fade-in-up-visible' : 'fade-in-up-initial'}
              `}
            >
              
              <FormField label="Name" id="name" value={data.name} type="text" placeholder="enter your name" onChange={e => setData('name', e.target.value)} />
              {errors.name && <div className="error text-red-500">{errors.name}</div>}
              <FormField label="Email" id="email" value={data.email} type="email" placeholder="enter your email" onChange={e => setData('email', e.target.value)} />
              {errors.email && <div className="error text-red-500">{errors.email}</div>}
              <FormField label="Phone" id="phone" value={data.phone} type="tel" placeholder="enter your number" onChange={e => setData('phone', e.target.value)} />
              {errors.phone && <div className="error text-red-500">{errors.phone}</div>}
              <FormField label="Date"  id="date" value={data.date} type="date" placeholder="Select the date" onChange={e => setData('date', e.target.value)} />
              {errors.date && <div className="error text-red-500">{errors.date}</div>}
              
              <div className="flex w-full flex-col md:flex-row md:items-center">
                <label className="font-outfit text-[14px] md:text-[18px] lg:text-[21px] font-normal text-left w-full md:w-1/4 mb-1 md:mb-0">
                  Party Size
                </label>
                <div className="flex w-full md:w-3/4 gap-4">
                  <input 
                    type="number" 
                    placeholder="Adults" 
                    min="0"
                    className="font-outfit text-[14px] md:text-[18px] lg:text-[21px] font-light w-1/2 bg-transparent border-b-1 
                               border-black focus:outline-none focus:border-deep-red py-2 placeholder:text-gray-500"
                  />
                  <input 
                    type="number" 
                    placeholder="Children" 
                    min="0"
                    className="font-outfit text-[14px] md:text-[18px] lg:text-[21px] font-light w-1/2 bg-transparent border-b-1 
                               border-black focus:outline-none focus:border-deep-red py-2 placeholder:text-gray-500"
                  />
                </div>
              </div>

            </form>
            {visible && (
                <div 
                    className={`
                        fixed bottom-10 right-10 p-4 rounded-lg shadow-lg text-white font-outfit
                        transition-opacity duration-300
                        ${flash.success_message ? 'bg-deep-red' : 'bg-gray-700'}
                        ${visible ? 'opacity-100' : 'opacity-0'}
                    `}
                >
                    {flash.success_message || flash.error_message}
                </div>
            )}
          </div>
        </div>

        <div className="mt-12 md:mt-16 flex justify-center md:justify-end">
          <button 
          type="submit" 
          disabled={processing}
          form="reservations-form"
          ref={buttonRef}
          className={`
            font-milyuna bg-transparent border-1 border-deep-red text-deep-red
            font-normal leading-none tracking-[.05em] p-4 md:p-3
            text-[20px] md:text-[36px] transition-colors bg-deep-red-hover hover:text-white
            ${buttonInView ? 'fade-in-up-visible' : 'fade-in-up-short-initial'}
          `}
        >
            Reserve
          </button>
        </div>

      </div>
    </section>
  );
}
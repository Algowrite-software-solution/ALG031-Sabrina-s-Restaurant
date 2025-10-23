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
        adults: '',
        children: '',
  });
  
  const { props } = usePage();
    
  const flash = (props.flash as { success_message?: string; error_message?: string }) || {};

  const [localSuccessMessage, setLocalSuccessMessage] = useState<string | null>(null);

  function handleSubmit(e: React.FormEvent) {
      e.preventDefault();
      post(route('reservation.store'), {
        preserveScroll: true,
        onSuccess: () => {
          reset();          
          if (!flash.success_message) {
            setLocalSuccessMessage('Reservation submitted successfully.');
            setTimeout(() => setLocalSuccessMessage(null), 5000);
          }
        },
    });
  }

  useEffect(() => {
      if (wasSuccessful) {
          reset();
      }
  }, [wasSuccessful]);

  const successText = flash.success_message || localSuccessMessage || '';
  const showInlineError = Object.keys(errors).length > 0 && !successText;
  const errorText = flash.error_message || (showInlineError ? 'Please correct the highlighted fields.' : '');

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
                  <div className="w-1/2">
                    <input
                      type="number"
                      placeholder="Adults"
                      min={0}
                      step={1}
                      value={data.adults}
                      onChange={(e) => setData('adults', e.target.value)}
                      className="font-outfit text-[14px] md:text-[18px] lg:text-[21px] font-light w-full bg-transparent border-b-1 border-black focus:outline-none focus:border-deep-red py-2 placeholder:text-gray-500"
                    />
                    {errors.adults && <div className="text-red-500 text-sm mt-1">{errors.adults}</div>}
                  </div>
                  <div className="w-1/2">
                    <input
                      type="number"
                      placeholder="Children"
                      min={0}
                      step={1}
                      value={data.children}
                      onChange={(e) => setData('children', e.target.value)}
                      className="font-outfit text-[14px] md:text-[18px] lg:text-[21px] font-light w-full bg-transparent border-b-1 border-black focus:outline-none focus:border-deep-red py-2 placeholder:text-gray-500"
                    />
                    {errors.children && <div className="text-red-500 text-sm mt-1">{errors.children}</div>}
                  </div>
                </div>
              </div>

            </form>
            {(successText || errorText) && (
              <div className="mt-4" role="status" aria-live="polite">
                <div className={`inline-flex items-center gap-3 px-4 py-2 border-1 bg-transparent ${successText ? 'border-deep-red text-deep-red' : 'border-black text-black'}`}>
                  {successText ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="8" x2="12" y2="12" />
                      <line x1="12" y1="16" x2="12" y2="16" />
                    </svg>
                  )}
                  <span className="font-outfit text-xs md:text-sm tracking-wide">
                    {successText || errorText}
                  </span>
                </div>
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
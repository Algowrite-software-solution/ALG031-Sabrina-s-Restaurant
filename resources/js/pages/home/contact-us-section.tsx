import React, { useEffect, useState } from 'react';
import { useForm, usePage } from '@inertiajs/react';
import { FormField } from '../../components/custom/form-field';
import { useInView } from 'react-intersection-observer';

export default function ContactUsSection() {

  const { ref: image1Ref, inView: image1InView } = useInView({triggerOnce: true, threshold: 0.1, delay: 200,});
  const { ref: text1Ref, inView: text1InView } = useInView({triggerOnce: true, threshold: 0.1, delay: 300,});
  const { ref: para1Ref, inView: para1InView } = useInView({triggerOnce: true, threshold: 0.1, delay: 400,});
  const { ref: divRef, inView: divInView } = useInView({triggerOnce: true, threshold: 0.1, delay: 500,});
  const { ref: buttonRef, inView: buttonInView } = useInView({triggerOnce: true, threshold: 0.1, delay: 600,});
  const { ref: text2Ref, inView: text2InView } = useInView({triggerOnce: true, threshold: 0.1, delay: 500,});
  const { ref: image2Ref, inView: image2InView } = useInView({triggerOnce: true, threshold: 0.1, delay: 600,});  

  const { data, setData, post, processing, errors, reset, wasSuccessful } = useForm({
      name: '',
      email: '',
      message: '',
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
      post(route('contact.store'), {
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
    <section id='contact-us' className="bg-cream w-full text-black">
      <div className='container mx-auto min-h-screen flex flex-col justify-center'>
        <div className="w-full py-10">
          <div 
            ref={image1Ref}
            className={`
              w-full h-64 bg-cover bg-center
              ${image1InView ? 'fade-in-up-visible' : 'fade-in-up-initial'}
            `}
            style={{ backgroundImage: `url('/storage/images/home/contact-us-image.webp')` }}
          ></div>
        </div>

        <div className="w-full py-8 md:py-16 px-4 md:px-0">
          
          <div className="flex flex-col md:flex-row md:items-start gap-8 mb-8">
            <div className="w-full md:w-2/3">
              <h2 
            ref={text1Ref}
            className={`
              font-milyuna font-normal leading-none text-left 
                            text-[72px] sm:text-[96px] md:text-[128px]
              ${text1InView ? 'fade-in-up-visible' : 'fade-in-up-initial'}
            `}
            >
                Contact Us
              </h2>
            </div>
            <div className="w-full md:w-1/3">
              <p
            ref={para1Ref}
            className={`
              font-outfit font-thin text-base md:text-2xl leading-snug text-center md:text-left
              ${para1InView ? 'fade-in-up-visible' : 'fade-in-up-initial'}
            `}
            >
                Have questions or special requests? We’re here to help. Reach out to Sabrina’s and let us 
                make your visit seamless and memorable.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start mb-0 md:mb-8">
            <form
              onSubmit={handleSubmit}
              ref={divRef}
              id="contact-form"
              className={`
                w-full md:w-2/3 flex flex-col gap-6
                ${divInView ? 'fade-in-up-visible' : 'fade-in-up-initial'}
              `}
            >
              <FormField 
                label="Name" 
                id="contact-name" 
                type="text" 
                placeholder="Ex: Samuel Iglesias" 
                value={data.name} 
                onChange={e => setData('name', e.target.value)} 
              />
              {errors.name && <div className="text-red-500">{errors.name}</div>}
              <FormField 
                label="Email" 
                id="contact-email" 
                type="email" 
                placeholder="email@example.com"
                value={data.email} 
                onChange={e => setData('email', e.target.value)}
              />
              {errors.email && <div className="text-red-500">{errors.email}</div>}
              <FormField 
                label="Your message" 
                id="contact-message" 
                placeholder="How can we help you...?"
                value={data.message} 
                onChange={e => setData('message', e.target.value)}
              />
              {errors.message && <div className="text-red-500">{errors.message}</div>}
            </form>

            
            {/* {successMessage && (
                <div className="fixed bottom-10 z-50 right-10 bg-deep-red text-white p-4 rounded-lg shadow-lg">
                    {successMessage}
                </div>
            )} */}

            {visible && (
                <div 
                    className={`
                        fixed bottom-10 z-50 right-10 p-4 rounded-lg shadow-lg text-white font-outfit
                        transition-opacity duration-300
                        ${flash.success_message ? 'bg-deep-red' : 'bg-gray-700'}
                        ${visible ? 'opacity-100' : 'opacity-0'}
                    `}
                >
                    {flash.success_message || flash.error_message}
                </div>
            )}

            <div className="w-full max-h-full md:w-1/3 flex justify-center items-end md:justify-start pt-0 md:pt-8">
              <button
              type="submit"  
              form="contact-form"
              disabled={processing}
              ref={buttonRef}
              className={`
                flex items-center gap-4 bg-transparent border-1 border-black text-black
                                font-outfit font-normal text-2xl md:text-3xl px-5 py-3
                                transition-colors hover:bg-black hover:text-white
                ${buttonInView ? 'fade-in-up-visible' : 'fade-in-up-initial'}
              `}
            >
                Send
                <svg xmlns="http://www.w3.org/2000/svg"
                    width="24" height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="text-center mb-4">
          <p
              ref={text2Ref}
              className={`
                font-outfit text-gray-500 font-light text-sm md:text-2xl leading-relaxed
                ${text2InView ? 'fade-in-up-visible' : 'fade-in-up-initial'}
              `}
            >
            +00 1 212 555 1234   |    Sabrina’s Spanish Cuisine, 123 Calle del Sol, Worcester, MA
          </p>
        </div>
  </div>
        
  <div
            ref={image2Ref}
    className={`w-full h-auto mt-8
              ${image2InView ? 'fade-in-up-visible' : 'fade-in-up-initial'}
            `}
          >
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2959.489112423588!2d-71.8043003239327!3d42.26834117120304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e4066c0d8b0e8b%3A0x296f30d0d866a237!2sWorcester%2C%20MA%2C%20USA!5e0!3m2!1sen!2sca!4v1678886400000" 
          width="100%" 
          height="450" 
          style={{ border: 0 }}
          allowFullScreen={false} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </section>
  );
}
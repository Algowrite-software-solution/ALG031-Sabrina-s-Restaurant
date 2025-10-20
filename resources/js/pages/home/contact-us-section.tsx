import React from 'react';
import { FormField } from '../../components/custom/form-field';
import { FormTextarea } from '../../components/custom/form-textarea';

export default function ContactUsSection() {

  return (
    <section className="bg-cream text-black">
      <div 
        className="w-full h-64 md:h-96 bg-cover bg-center"
        style={{ backgroundImage: `url('storage/images/home/contact-us-image.jpg')` }}
      ></div>

      <div className="container mx-auto py-16 md:py-24 px-4 md:px-8">
        
        <div className="flex flex-col md:flex-row md:items-center gap-8 mb-16">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <p className="font-outfit font-thin text-base md:text-2xl leading-snug text-center md:text-left">
              Have questions or special requests? We’re here to help. Reach out to Sabrina’s and let us 
              make your visit seamless and memorable.
            </p>
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <h2 className="font-cormorant font-normal leading-none text-center md:text-right 
                           text-[96px] md:text-[128px]">
              Contact Us
            </h2>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start mb-16">
          <form className="w-full md:w-2/3 flex flex-col gap-6">
            <FormField label="Name" id="contact-name" type="text" placeholder="Ex: Samuel Iglesias" />
            <FormField label="Email" id="contact-email" type="email" placeholder="email@example.com" />
            <FormTextarea label="Your message" id="contact-message" placeholder="How can we help you...?" />
          </form>

          <div className="w-full md:w-1/3 flex justify-center md:justify-start pt-8">
            <button className="flex items-center gap-4 bg-transparent border-2 border-black text-black
                               font-outfit font-normal text-2xl md:text-3xl px-8 py-3
                               transition-colors hover:bg-black hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
              Send
            </button>
          </div>
        </div>

        <div className="text-center mb-16">
          <p className="font-outfit font-normal text-sm md:text-2xl leading-relaxed">
            +00 1 212 555 1234   |    Sabrina’s Spanish Cuisine, 123 Calle del Sol, Worcester, MA
          </p>
        </div>
      </div>
      
      <div>
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
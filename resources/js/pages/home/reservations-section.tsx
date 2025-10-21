import React from 'react';
import { FormField } from '../../components/custom/form-field'; // Import our new component

export default function ReservationsSection() {
  return (
    <section className="bg-cream h-full md:h-screen text-black py-8 md:py-4 px-4 md:px-8">
      <div className="container mx-auto">
        
        <h2 className="font-cormorant font-normal leading-none tracking-normal 
                       text-center md:text-left text-[64px] md:text-[112px] mb-8">
          Reservations
        </h2>

        <div className="flex flex-col md:flex-row gap-12 md:gap-10">
          
          <div className="w-full md:w-1/3 order-1">
            <p className="font-outfit font-thin leading-snug tracking-normal
                           text-center md:text-left text-[14px] md:text-[18px] lg:text-[21px]">
              An intimate dining experience awaits. Secure your spot and enjoy elegant Spanish cuisine, 
              fine wine, and warm hospitality at Sabrina’s.
            </p>
          </div>

          <div className="w-full md:w-2/3 pl-0 md:pl-20 order-2">
            <form className="flex flex-col gap-6">
              
              <FormField label="Name" id="name" type="text" placeholder="enter your name" />
              <FormField label="Email" id="email" type="email" placeholder="enter your email" />
              <FormField label="Phone" id="phone" type="tel" placeholder="enter your number" />
              <FormField label="Date" id="date" type="date" placeholder="Select the date" />

              <div className="flex w-full flex-col md:flex-row md:items-center">
                <label className="font-outfit text-[14px] md:text-[18px] lg:text-[21px] font-normal text-left w-full md:w-1/4 mb-1 md:mb-0">
                  Party Size
                </label>
                <div className="flex w-full md:w-3/4 gap-4">
                  <input 
                    type="number" 
                    placeholder="Adults" 
                    min="1"
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
          </div>
        </div>

        <div className="mt-12 md:mt-16 flex justify-center md:justify-end">
          <button className="font-cormorant bg-transparent border-1 border-deep-red text-deep-red
                             font-normal uppercase leading-none tracking-[.05em] p-4 md:p-3
                             text-[20px] md:text-[40px] transition-colors hover:bg-deep-red hover:text-white">
            Reserve
          </button>
        </div>

      </div>
    </section>
  );
}
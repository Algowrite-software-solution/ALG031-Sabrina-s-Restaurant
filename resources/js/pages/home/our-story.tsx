import React from 'react';

export default function OurStory() {

  return (
    <section id='about-us' className="bg-deep-red h-full md:h-screen flex justify-center items-center">
      <div className="container mx-auto flex flex-col md:flex-row">

        <div className="relative w-full md:w-1/2 pr-4 md:pr-10 lg:pr-15 p-4">
            <div className="relative h-full">
                <img 
                    src={`storage/images/home/our-story.jpg`} 
                    alt="Interior of Sabrina's restaurant" 
                    className="w-full h-full drop-shadow-2xl/55"
                />
                
                <h2 className="font-cormorant absolute top-10 right-15 translate-x-1/2
                                text-[128px] md:text-[112px] lg:text-[128px] font-normal leading-none tracking-[.05em] hidden md:block"
                >
                    <span className="text-pure-white">Ou</span>
                    <span className="text-black">r</span>
                </h2>

                <h2 className="font-cormorant absolute bottom-4 left-1/2 -translate-x-1/2
                                text-pure-white text-[96px] font-normal leading-none tracking-[.05em] md:hidden"
                >
                    Our
                </h2>
            </div>
        </div>

        <div className="w-full md:w-1/2 p-8 pt-0 md:pt-8 pl-8 md:pl-10 lg:pl-15 flex flex-col gap-5 lg:gap-8 xl:gap-10 text-black">
          
          <h2 className="font-cormorant text-[96px] font-normal leading-none tracking-[.05em]
                         self-end md:hidden">
            Story
          </h2>

          <p className="font-outfit text-white text-left text-[14px] md:text-[18px] lg:text-[21px]
                       font-light leading-snug tracking-[.05em] mt-4 md:mt-0">
            At Sabrina’s, every dish tells a story—one inspired by the vibrant flavors of Spain’s coastal
            kitchens and bustling markets. Founded by culinary enthusiasts who fell in love with traditional
            tapas culture, our restaurant celebrates community, authenticity, and artistry on every plate.
          </p>
          
          <h2 className="font-cormorant text-[128px] md:text-[112px] lg:text-[128px] font-normal leading-none tracking-[.05em]
                         text-start my-8 hidden md:block">
            Story
          </h2>

            
            
            <div className="w-2/3 md:w-1/2 mt-8 md:mt-0 self-end">
              <p className="font-outfit text-pure-white text-right md:text-left text-[14px] md:text-[18px] lg:text-[21px]
                           font-light leading-snug tracking-[.05em]">
                Each meal invites you to slow down, share, and savor — the Spanish way.
              </p>
            </div>
            
            <div className="w-full md:w-1/2 flex justify-center md:justify-start mt-8 md:mt-0">
              <button className="font-outfit text-pure-white border-1 border-pure-white bg-transparent
                                 p-2 md:p-3 text-[22px] md:text-[18px] lg:text-[22px] font-light leading-none tracking-[.05em]
                                 transition-colors hover:bg-white text-deep-red-hover">
                Contact Us
              </button>
            </div>
        </div>
      </div>
    </section>
  );
}
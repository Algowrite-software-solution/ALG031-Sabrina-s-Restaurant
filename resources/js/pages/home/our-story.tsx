import React from 'react';

export default function OurStory() {

  return (
    <section className="bg-deep-red h-screen flex justify-center items-center">
      <div className="container mx-auto flex flex-col md:flex-row">

        <div className="relative w-full md:w-1/2 p-4">
            <div className="relative bg-amber-200 h-full">
                <img 
                    src={`storage/images/home/our-story.jpg`} 
                    alt="Interior of Sabrina's restaurant" 
                    className="w-full h-full drop-shadow-2xl"
                />
                
                <h2 className="font-cormorant absolute top-10 right-15 translate-x-1/2
                                text-[128px] font-normal leading-none tracking-[.05em] hidden md:block"
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

        <div className="w-full md:w-1/2 p-8 flex flex-col text-black">
          
          <h2 className="font-cormorant text-[96px] font-normal leading-none tracking-[.05em]
                         self-end md:hidden">
            Story
          </h2>

          <p className="font-outfit text-white text-center md:text-left text-[14px] md:text-[24px]
                       font-light leading-snug md:leading-none tracking-[.05em] mt-4 md:mt-0">
            At Sabrina’s, every dish tells a story—one inspired by the vibrant flavors of Spain’s coastal
            kitchens and bustling markets. Founded by culinary enthusiasts who fell in love with traditional
            tapas culture, our restaurant celebrates community, authenticity, and artistry on every plate.
          </p>
          
          <h2 className="font-cormorant text-[128px] font-normal leading-none tracking-[.05em]
                         text-center my-8 hidden md:block">
            Story
          </h2>

          <div className="flex flex-col md:flex-row items-center mt-auto pt-8">
            
            
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <p className="font-outfit text-pure-white text-center md:text-left text-[14px] md:text-[24px]
                           font-light leading-snug md:leading-none tracking-[.05em]">
                Each meal invites you to slow down, share, and savor — the Spanish way.
              </p>
            </div>
            
            <div className="w-full md:w-1/2 flex justify-center md:justify-start order-2 md:order-1 mt-8 md:mt-0">
              <button className="font-outfit text-pure-white border-2 border-pure-white bg-transparent
                                 px-6 py-2 text-[24px] font-light leading-none tracking-[.05em]
                                 transition-colors hover:bg-pure-white hover:text-deep-red">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import React from 'react';
import Button from '@/components/custom/button';

export default function HeroSection() {

  return (
    <div
      className="relative flex h-screen w-full items-center justify-center bg-cover bg-center text-center"
      style={{ backgroundImage: `url("storage/images/home/hero-background.png")` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/40"></div>

      <div className="relative z-10 flex flex-col items-center gap-y-14 px-6 pt-40 md:pt-20 text-pure-white">
        
        <h1 className="font-cormorant text-[48px] font-light leading-none md:text-[96px]">
          A Taste of Spain, Served with Soul.
        </h1>
        
        <p className="font-outfit text-[18px] font-extralight leading-none md:text-[32px] max-w-4xl">
          Authentic Spanish tapas, wines, and culinary passion right in the heart of the city.
        </p>
        
        <div className='mt-4 flex gap-4 flex-col'>
        <button 
          className="font-cormorant md:hidden block border-2 border-deep-red bg-transparent px-2 py-3 text-[24px]
                     font-light uppercase leading-none tracking-[.05em] transition-colors 
                     hover:bg-deep-red hover:bg-opacity-75 md:text-[40px]"
        >
          Reserve a Table
        </button>
        
        <button 
          className="font-cormorant border-2 border-deep-red bg-transparent px-2 py-3 text-[24px]
                     font-light uppercase leading-none tracking-[.05em] transition-colors 
                     hover:bg-deep-red hover:bg-opacity-75 md:text-[40px]"
        >
          View Menu
        </button>
        </div>
        
        <p className="font-outfit mt-4 max-w-7xl opacity-65 text-[14px] font-thin leading-snug md:text-[17px]">
          Welcome to Sabrina’s, where modern elegance meets timeless Spanish flavor. Inspired by the 
          vibrant tapas culture of Barcelona, we invite you to indulge in artisanal small plates, 
          fine wines, and a warm, intimate atmosphere.
        </p>

      </div>
    </div>
  );
}
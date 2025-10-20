import React from 'react';

export default function HeroSection() {

  return (
    <div
      className="relative flex h-screen w-full items-center justify-center bg-cover bg-center text-center"
      style={{ backgroundImage: `url("storage/images/home/hero-background.png")` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/40"></div>

      <div className="relative z-10 flex flex-col items-center gap-y-8 px-6 text-pure-white">
        
        <h1 className="font-cormorant text-[48px] font-normal leading-none md:text-[96px]">
          A Taste of Spain, Served with Soul.
        </h1>
        
        <p className="font-outfit text-[18px] font-light leading-none md:text-[32px] max-w-4xl">
          Authentic Spanish tapas, wines, and culinary passion right in the heart of the city.
        </p>
        
        <button 
          className="font-cormorant mt-4 border-2 border-deep-red bg-transparent px-8 py-2 text-[24px]
                     font-normal uppercase leading-none tracking-[.05em] transition-colors 
                     hover:bg-deep-red hover:bg-opacity-75 md:text-[40px]"
        >
          View Menu
        </button>
        
        <p className="font-outfit mt-4 max-w-3xl text-[14px] font-thin leading-snug md:text-[16px]">
          Welcome to Sabrina’s, where modern elegance meets timeless Spanish flavor. Inspired by the 
          vibrant tapas culture of Barcelona, we invite you to indulge in artisanal small plates, 
          fine wines, and a warm, intimate atmosphere.
        </p>

      </div>
    </div>
  );
}
import React from 'react';

interface MenuCardProps {
  imageUrl: string;
  title: string;
  description: string;
  isActive: boolean;
}

export default function MenuCard({ imageUrl, title, description, isActive }: MenuCardProps) {
  return (
    <div className="flex flex-col bg-cream ">
      <div className="relative overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-auto object-cover aspect-[1/1]" 
        />

        {isActive && (
          <h3 
            className="font-cormorant absolute inset-0 flex items-center justify-center
                       text-pure-white text-7xl md:text-9xl font-normal text-center
                       leading-none mix-blend-difference pointer-events-none"
          >
            {title}
          </h3>
        )}
      </div>
      
        {isActive && (
            <div className="bg-cream p-6 flex flex-col md:flex-row items-center gap-4">
                
                <p className="font-outfit text-black text-center md:text-left text-lg md:text-xl
                            font-light leading-tight tracking-normal w-full md:w-[60%] order-1 md:order-none">
                {description}
                </p>

                <div className="w-full md:w-[40%] flex justify-center order-2 md:order-none">
                    <button 
                    className="font-outfit bg-transparent border-2 border-black text-black
                                text-xl md:text-2xl font-light leading-none tracking-[.05em] px-4 py-2
                                whitespace-nowrap transition-colors hover:bg-black hover:text-white"
                    >
                    See More
                    </button>
                </div>
            </div>
        )}
    </div>
  );
}
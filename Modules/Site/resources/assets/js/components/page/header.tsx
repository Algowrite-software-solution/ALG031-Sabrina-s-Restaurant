// resources/js/Components/Header.tsx

import React, { useState } from 'react';

interface HeaderProps {
  logoUrl: string;
}

export default function Header({ logoUrl }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-30 border-b border-white/20 text-pure-white">
      <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/55 to-black/20"></div>

      <div className="relative z-10 flex justify-between items-center p-8 xl:py-6 2xl:py-8">
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#about-us" className="font-outfit text-2xl font-light hover:opacity-80 transition-opacity">About</a>
          <a href="#menu" className="font-outfit text-2xl font-light hover:opacity-80 transition-opacity">Menu</a>
        </nav>

        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Open menu">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>

        <div className="md:absolute md:left-1/2 md:-translate-x-1/2">
          <a href="#home">
            <img src={'storage/images/brand/logo-deep-red.png'} alt="Sabrina's Logo" className="h-18 md:h-10 lg:h-18 xl:h-12 2xl:h-18 w-auto" />
          </a>
        </div>
        
        <div className="hidden md:block">
          <a href="#reservations" className="font-outfit text-2xl font-light border-s border-white/20 p-6 xl:p-4 2xl:p-6 hover:bg-pure-white hover:text-deep-red transition-colors">
            Reserve a Table
          </a>
        </div>
      </div>

      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-black bg-opacity-90 md:hidden">
          <nav className="flex flex-col items-center gap-6 p-8">
            <a href="#about-us" onClick={() => setIsMenuOpen(false)} className="font-outfit text-2xl font-light">About</a>
            <a href="#menu" onClick={() => setIsMenuOpen(false)} className="font-outfit text-2xl font-light">Menu</a>
          </nav>
        </div>
      )}
    </header>
  );
}
// resources/js/Components/Footer.tsx

import React from 'react';

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);


export default function Footer() {

  return (
    <footer className="bg-cream flex justify-center items-center text-black overflow-hidden relative">
      <div className='container text-black overflow-hidden relative'>
      <div className="py-16 md:py-24 pb-10 md:pb-0 px-4 md:px-16 2xl:pb-30">
        <div className="flex flex-col md:flex-row text-center md:text-left items-center md:items-start justify-between gap-12">
          
          <div className="flex flex-col gap-10 items-center md:items-start">
            <h3 className="font-outfit font-semibold text-3xl leading-none">
              Sabrina’s Spanish Cuisine © 2025
            </h3>
            <div className="flex flex-col gap-1 items-center md:items-start">
              <p className="font-outfit font-normal text-xl leading-none">
                123 Calle del Sol, Worcester, MA
              </p>
              <p className="font-outfit font-normal text-xl leading-none">
                Open Tuesday – Sunday | 4 PM – 11 PM
              </p>
            </div>
          </div>
          
          <div className="flex flex-col gap-6 items-center md:items-start">
            <h3 className="font-outfit font-normal text-3xl leading-none">
              Links
            </h3>
            <nav className="flex flex-col gap-2 items-center md:items-start">
              <a href="#reservations" className="font-outfit font-light text-xl leading-none text-deep-red-hover hover:underline">Reservations</a>
              <a href="#contact-us" className="font-outfit font-light text-xl leading-none text-deep-red-hover hover:underline">Contact Us</a>
              <a href="/" className="font-outfit font-light text-xl leading-none text-deep-red-hover hover:underline">Home</a>
            </nav>
          </div>

          <div className="flex flex-col gap-6 items-center md:items-start">
            <h3 className="font-outfit font-normal text-3xl leading-none">
              Follow Us
            </h3>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/" target='_blank' aria-label="Instagram" className="text-deep-red-hover">
                <InstagramIcon />
              </a>
              <a href="https://www.facebook.com/" target='_blank' aria-label="Facebook" className="text-deep-red-hover">
                <FacebookIcon />
              </a>
            </div>
          </div>

        </div>
      </div>
      
      <div className='pt-0 md:pt-50 m-0'>
        <img 
          src={'storage/images/brand/logo-deep-red.png'} 
          alt="A final delicious dish" 
          className="md:absolute bottom-0 md:translate-y-1/2 translate-y-0
            w-full h-auto" 
        />
      </div>
      </div>
    </footer>
  );
}
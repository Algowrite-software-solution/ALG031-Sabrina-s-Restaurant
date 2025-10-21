import React, { useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export default function HeroSection() {

  const { ref: h1Ref, inView: h1InView } = useInView({triggerOnce: true, threshold: 0.1, delay: 200,});
  const { ref: para1Ref, inView: para1InView } = useInView({triggerOnce: true, threshold: 0.1, delay: 300,});
  const { ref: button1Ref, inView: button1InView } = useInView({triggerOnce: true, threshold: 0.1, delay: 400,});
  const { ref: button2Ref, inView: button2InView } = useInView({triggerOnce: true, threshold: 0.1, delay: 500,});
  const { ref: para2Ref, inView: para2InView } = useInView({triggerOnce: true, threshold: 0.1, delay: 600,});

  const videos = [
    "storage/videos/home/hero-background1.mp4",
    "storage/videos/home/hero-background2.mp4",
    "storage/videos/home/hero-background3.mp4",
  ];

  const [currentVideo, setCurrentVideo] = useState(0);
  const videoRef = useRef(null);

  const handleVideoEnd = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length);
  };

  return (
    <div id='home'
      className="relative flex h-screen w-full items-center justify-center text-center bg-center bg-cover"
      style={{ backgroundImage: `url("storage/images/home/hero-background.png")` }}
    >
      <video
        key={currentVideo}
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={videos[currentVideo]}
        autoPlay
        loop={false}
        muted
        playsInline
        onEnded={handleVideoEnd}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/75 to-black/55"></div>

      <div className="relative z-10 flex flex-col items-center gap-y-14 xl:gap-y-8 2xl:gap-y-14 px-6 pt-40 md:pt-20 text-pure-white">
        
        <h1 
          ref={h1Ref}
          className={`
            font-cormorant text-[48px] font-light leading-none md:text-[96px]
            ${h1InView ? 'fade-in-up-visible' : 'fade-in-up-initial'}
          `}
        >
          A Taste of Spain, Served with Soul.
        </h1>
        
        <p 
          ref={para1Ref}
          className={`
            font-outfit text-[18px] font-extralight leading-none md:text-[32px] max-w-4xl
            ${para1InView ? 'fade-in-up-visible' : 'fade-in-up-initial'}
          `}
        >
          Authentic Spanish tapas, wines, and culinary passion right in the heart of the city.
        </p>
        
        <div className='mt-4 flex gap-4 flex-col'>
        <a href='#reservations' 
          ref={button1Ref}
          className={`
            font-cormorant md:hidden block border-1 border-deep-red bg-transparent px-2 py-3 text-[24px]
                     font-light leading-none tracking-[.05em] transition-colors 
                     bg-deep-red-hover hover:bg-opacity-75 md:text-[40px]
            ${button1InView ? 'fade-in-up-visible' : 'fade-in-up-initial'}
          `}
        >
          Reserve a Table
        </a>
        
        <a href='#menu'
          ref={button2Ref}
          className={`
            font-cormorant border-1 border-deep-red bg-transparent px-2 py-3 text-[24px]
                     font-light leading-none tracking-[.05em] transition-colors 
                     bg-deep-red-hover hover:bg-opacity-75 md:text-[40px]
            ${button2InView ? 'fade-in-up-visible' : 'fade-in-up-initial'}
          `}
        >
          View Menu
        </a>
        </div>
        
        <p
          ref={para2Ref}
          className={`
            font-outfit mt-4 max-w-7xl opacity-65 text-[14px] font-thin leading-snug md:text-[17px]
            ${para2InView ? 'fade-in-up-visible' : 'fade-in-up-short-initial'}
          `}
        >
          Welcome to Sabrina’s, where modern elegance meets timeless Spanish flavor. Inspired by the 
          vibrant tapas culture of Barcelona, we invite you to indulge in artisanal small plates, 
          fine wines, and a warm, intimate atmosphere.
        </p>

      </div>
    </div>
  );
}
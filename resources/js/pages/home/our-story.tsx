import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const slideshowImages = [
  'storage/images/home/our-story-image1.webp',
  'storage/images/home/our-story-image2.webp',
  'storage/images/home/our-story-image3.webp',
  'storage/images/home/our-story-image4.webp',
];

export default function OurStory() {
  
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slideshowImages.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const { ref: leftImageRef, inView: leftImageInView } = useInView({triggerOnce: true, threshold: 0.1, delay: 100,});
  const { ref: leftTextRef, inView: leftTextInView } = useInView({triggerOnce: true, threshold: 0.1, delay: 500,});
  const { ref: leftText2Ref, inView: leftText2InView } = useInView({triggerOnce: true, threshold: 0.1, delay: 500,});
  const { ref: rightPara1Ref, inView: rightPara1InView } = useInView({triggerOnce: true, threshold: 0.1, delay: 200,});
  const { ref: rightPara2Ref, inView: rightPara2InView } = useInView({triggerOnce: true, threshold: 0.1, delay: 300,});
  const { ref: rightTextRef, inView: rightTextInView } = useInView({triggerOnce: true, threshold: 0.1, delay: 400,});
  const { ref: rightText2Ref, inView: rightText2InView } = useInView({triggerOnce: true, threshold: 0.1, delay: 400,});
  const { ref: rightButtonRef, inView: rightButtonInView } = useInView({triggerOnce: true, threshold: 0.1, delay: 450,});

  return (
    <section id='about-us' className="bg-deep-red h-full md:h-screen flex justify-center items-center">
      <div className="flex flex-col container md:flex-row py-20 md:py-0 px-2 lg:px-10 xl:px-20 2xl:px-40">

        <div className="relative w-full md:w-1/2 pr-4 md:pr-10 lg:pr-15 p-4 py-0">
            <div 
                  ref={leftImageRef}
                  className={`
                    relative h-70 md:h-full
                    ${leftImageInView ? 'fade-in-left-visible' : 'fade-in-left-initial'}
                  `}
                >

              {slideshowImages.map((imageUrl, index) => (
                <img
                  key={index}
                  src={imageUrl}
                  alt={`Sabrina's story image ${index + 1}`}
                  className={`
                    absolute inset-0 w-full h-full object-cover
                    transition-opacity duration-1000 ease-in-out
                    ${index === currentIndex ? 'opacity-100' : 'opacity-0'}
                  `}
                />
              ))}
                
                <h2 
                ref={leftTextRef}
                className={`
                  font-milyuna absolute top-10 right-15 translate-x-1/2
                                text-[128px] md:text-[112px] lg:text-[128px] font-normal leading-none tracking-[.05em] hidden md:block
                  ${leftTextInView ? 'fade-in-left-visible' : 'fade-in-left-initial'}
                `}
              >
                    <span className="text-pure-white">Ou</span>
                    <span className="text-black">r</span>
                </h2>

                <h2 
                ref={leftText2Ref}
                className={`
                  font-milyuna absolute bottom-4 left-1/2 -translate-x-1/2
                                text-pure-white text-[96px] font-normal leading-none tracking-[.05em] md:hidden
                  ${leftText2InView ? 'fade-in-left-visible' : 'fade-in-left-initial'}
                `}
              >
                    Our
                </h2>
            </div>
        </div>

        <div className="w-full md:w-1/2 p-8 py-0 pt-0 md:pt-0 pl-8 md:pl-10 lg:pl-15 flex flex-col gap-5 md:gap-5 lg:gap-0 xl:gap-4 2xl:gap-14 text-black">
          
          <h2 
                ref={rightText2Ref}
                className={`
                  font-milyuna text-[96px] font-normal leading-none tracking-[.05em]
                         self-end md:hidden
                  ${rightText2InView ? 'fade-in-right-visible' : 'fade-in-right-initial'}
                `}
              >
            Story
          </h2>

          <p 
                ref={rightPara1Ref}
                className={`
                  font-outfit text-white text-left text-[14px] md:text-[18px] lg:text-[21px]
                       font-light leading-snug tracking-[.05em] mt-4 md:mt-0
                  ${rightPara1InView ? 'fade-in-right-visible' : 'fade-in-right-initial'}
                `}
              >
            At Sabrina’s, every dish tells a story—one inspired by the vibrant flavors of Spain’s coastal
            kitchens and bustling markets. Founded by culinary enthusiasts who fell in love with traditional
            tapas culture, our restaurant celebrates community, authenticity, and artistry on every plate.
          </p>
          
          <h2 
                ref={rightTextRef}
                className={`
                  font-milyuna text-[128px] md:text-[112px] lg:text-[128px] font-normal leading-none tracking-[.05em]
                         text-start my-8 hidden md:block
                  ${rightTextInView ? 'fade-in-right-visible' : 'fade-in-right-initial'}
                `}
              >
            Story
          </h2>

            
            
            <div className="w-2/3 md:w-1/2 mt-8 md:mt-0 self-end">
              <p 
                ref={rightPara2Ref}
                className={`
                  font-outfit text-pure-white text-right md:text-left text-[14px] md:text-[18px] lg:text-[21px]
                  font-light leading-snug tracking-[.05em]
                  ${rightPara2InView ? 'fade-in-right-visible' : 'fade-in-right-initial'}
                `}
              >
                Each meal invites you to slow down, share, and savor — the Spanish way.
              </p>
            </div>
            
            <div className="w-full md:w-1/2 flex justify-center md:justify-start mt-8 md:mt-0">
              <a 
                href='#contact-us'
                ref={rightButtonRef}
                className={`
                  font-outfit text-pure-white border-1 border-pure-white bg-transparent
                                 p-2 md:p-3 text-[22px] md:text-[18px] lg:text-[22px] font-light leading-none tracking-[.05em]
                                 transition-colors hover:bg-white text-deep-red-hover
                  ${rightButtonInView ? 'fade-in-right-visible' : 'fade-in-right-initial'}
                `}
              >
                Contact Us
              </a>
            </div>
        </div>
      </div>
    </section>
  );
}



export function OurStoryaaa() {
  // 3. Set up state to track the current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // 4. Use useEffect to create a timer that cycles through the images
  useEffect(() => {
    // Set an interval to run every 5 seconds (5000 milliseconds)
    const intervalId = setInterval(() => {
      // Update the current index, looping back to 0 at the end
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slideshowImages.length);
    }, 5000); // Change this value to make the slideshow faster or slower

    // IMPORTANT: Clean up the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []); // The empty dependency array ensures this effect runs only once

  // --- Animation hooks (these are from the previous step and are unchanged) ---
  const { ref: leftRef, inView: leftInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: rightRef, inView: rightInView } = useInView({ triggerOnce: true, threshold: 0.1, delay: 200 });
  // ... and any other animation hooks you have ...

  return (
    <section className="bg-deep-red py-12 md:py-20 overflow-x-hidden">
      <div className="container mx-auto flex flex-col md:flex-row">
        
        {/* --- LEFT HALF (Image Slideshow) --- */}
        <div
          ref={leftRef}
          className={`relative w-full md:w-1/2 p-4 lg:p-8 ${leftInView ? 'fade-in-left-visible' : 'fade-in-left-initial'}`}
        >
          {/* 5. The image container now needs a relative position to stack the images */}
          <div className="relative w-full aspect-[4/5] drop-shadow-2xl">
            
            {/* 6. Map over the images array to render all images stacked on top of each other */}
            {slideshowImages.map((imageUrl, index) => (
              <img
                key={index}
                src={imageUrl}
                alt={`Sabrina's story image ${index + 1}`}
                className={`
                  absolute inset-0 w-full h-full object-cover
                  transition-opacity duration-1000 ease-in-out
                  ${index === currentIndex ? 'opacity-100' : 'opacity-0'}
                `}
              />
            ))}
            
            {/* The "Our" text is layered on top of the image container */}
            <h2 className="font-cormorant absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[128px] font-normal leading-none tracking-[.05em] hidden md:block z-10 pointer-events-none">
              <span className="text-pure-white">Ou</span><span className="text-black">r</span>
            </h2>
            <h2 className="font-cormorant absolute bottom-4 left-1/2 -translate-x-1/2 text-pure-white text-[96px] font-normal leading-none tracking-[.05em] md:hidden z-10">
              Our
            </h2>
          </div>
        </div>

        {/* --- RIGHT HALF (Text Content) --- */}
        <div
          ref={rightRef}
          className={`w-full md:w-1/2 p-8 flex flex-col text-black ${rightInView ? 'fade-in-right-visible' : 'fade-in-right-initial'}`}
        >
          {/* ... The entire right side with the text paragraphs and button remains exactly the same ... */}
        </div>
      </div>
    </section>
  );
}
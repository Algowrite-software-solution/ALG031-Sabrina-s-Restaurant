import React from 'react';
import { useInView } from 'react-intersection-observer';

export default function OurStory() {

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
      <div className="flex flex-col md:flex-row py-20 md:py-0 px-2 lg:px-10 xl:px-20 2xl:px-40">

        <div className="relative w-full md:w-1/2 pr-4 md:pr-10 lg:pr-15 p-4">
            <div className="relative h-full">
                <img 
                    src={`storage/images/home/our-story.jpg`} 
                    alt="Interior of Sabrina's restaurant" 
                ref={leftImageRef}
                className={`
                  w-full h-full drop-shadow-2xl/55
                  ${leftImageInView ? 'fade-in-left-visible' : 'fade-in-left-initial'}
                `}
              />
                
                <h2 
                ref={leftTextRef}
                className={`
                  font-cormorant absolute top-10 right-15 translate-x-1/2
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
                  font-cormorant absolute bottom-4 left-1/2 -translate-x-1/2
                                text-pure-white text-[96px] font-normal leading-none tracking-[.05em] md:hidden
                  ${leftText2InView ? 'fade-in-left-visible' : 'fade-in-left-initial'}
                `}
              >
                    Our
                </h2>
            </div>
        </div>

        <div className="w-full md:w-1/2 p-8 pt-0 md:pt-8 pl-8 md:pl-10 lg:pl-15 flex flex-col gap-5 md:gap-5 lg:gap-4 xl:gap-4 2xl:gap-14 text-black">
          
          <h2 
                ref={rightText2Ref}
                className={`
                  font-cormorant text-[96px] font-normal leading-none tracking-[.05em]
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
                  font-cormorant text-[128px] md:text-[112px] lg:text-[128px] font-normal leading-none tracking-[.05em]
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
              <button 
                ref={rightButtonRef}
                className={`
                  font-outfit text-pure-white border-1 border-pure-white bg-transparent
                                 p-2 md:p-3 text-[22px] md:text-[18px] lg:text-[22px] font-light leading-none tracking-[.05em]
                                 transition-colors hover:bg-white text-deep-red-hover
                  ${rightButtonInView ? 'fade-in-right-visible' : 'fade-in-right-initial'}
                `}
              >
                Contact Us
              </button>
            </div>
        </div>
      </div>
    </section>
  );
}



export function OurSikjtory() {
  const storyImageUrl = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2670';

  // --- HOOKS FOR ANIMATION ---
  
  // Observer for the left image block (slides in from left)
  const { ref: leftRef, inView: leftInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Observer for the right content block (slides in from right)
  const { ref: rightRef, inView: rightInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // A separate observer for each staggered element inside the right block
  const useFadeInUp = (delay = 0) => useInView({ triggerOnce: true, threshold: 0.1, delay });
  
  const { ref: para1Ref, inView: para1InView } = useFadeInUp();
  const { ref: storyHeadingRef, inView: storyHeadingInView } = useFadeInUp(200); // 200ms delay
  const { ref: para2Ref, inView: para2InView } = useFadeInUp(400); // 400ms delay
  const { ref: buttonRef, inView: buttonInView } = useFadeInUp(400); // 400ms delay, same as paragraph above it

  return (
    <section className="bg-deep-red py-12 md:py-20 overflow-x-hidden">
      <div className="container mx-auto flex flex-col md:flex-row">
        
        {/* --- LEFT HALF (Image) --- */}
        <div
          ref={leftRef}
          className={`relative w-full md:w-1/2 p-4 lg:p-8 ${leftInView ? 'fade-in-left-visible' : 'fade-in-left-initial'}`}
        >
          {/* ... image and "Our" text are unchanged ... */}
          <div className="relative">
            <img src={storyImageUrl} alt="Interior of Sabrina's restaurant" className="w-full h-auto drop-shadow-2xl"/>
            <h2 className="font-cormorant absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[128px] font-normal leading-none tracking-[.05em] hidden md:block"><span className="text-pure-white">Ou</span><span className="text-black">r</span></h2>
            <h2 className="font-cormorant absolute bottom-4 left-1/2 -translate-x-1/2 text-pure-white text-[96px] font-normal leading-none tracking-[.05em] md:hidden">Our</h2>
          </div>
        </div>

        {/* --- RIGHT HALF (Text Content) --- */}
        <div
          ref={rightRef}
          className={`w-full md:w-1/2 p-8 flex flex-col text-black ${rightInView ? 'fade-in-right-visible' : 'fade-in-right-initial'}`}
        >
          <h2 className="font-cormorant text-[96px] font-normal leading-none tracking-[.05em] self-end md:hidden">Story</h2>
          
          {/* Paragraph 1: Fades up first */}
          <p
            ref={para1Ref}
            className={`font-outfit text-center md:text-left text-[14px] md:text-[24px] font-light leading-snug md:leading-none tracking-[.05em] mt-4 md:mt-0 ${para1InView ? 'fade-in-up-visible' : 'fade-in-up-initial'}`}
          >
            At Sabrina’s, every dish tells a story...
          </p>
          
          {/* "Story" Heading: Fades up second */}
          <h2
            ref={storyHeadingRef}
            className={`font-cormorant text-[128px] font-normal leading-none tracking-[.05em] text-center my-8 hidden md:block ${storyHeadingInView ? 'fade-in-up-visible' : 'fade-in-up-initial'}`}
          >
            Story
          </h2>

          {/* Bottom Section: Fades up third */}
          <div className="flex flex-col md:flex-row items-center mt-auto pt-8">
            <div
              ref={buttonRef}
              className={`w-full md:w-1/2 flex justify-center md:justify-start order-2 md:order-1 mt-8 md:mt-0 ${buttonInView ? 'fade-in-up-visible' : 'fade-in-up-initial'}`}
            >
              <button className="font-outfit text-pure-white border-2 border-pure-white bg-transparent px-6 py-2 text-[24px] font-light leading-none tracking-[.05em] transition-colors hover:bg-pure-white hover:text-deep-red">Contact Us</button>
            </div>
            <div
              ref={para2Ref}
              className={`w-full md:w-1/2 order-1 md:order-2 ${para2InView ? 'fade-in-up-visible' : 'fade-in-up-initial'}`}
            >
              <p className="font-outfit text-pure-white text-center md:text-left text-[14px] md:text-[24px] font-light leading-snug md:leading-none tracking-[.05em]">
                Each meal invites you to slow down, share, and savor — the Spanish way.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
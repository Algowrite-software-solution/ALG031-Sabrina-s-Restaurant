import { useState } from 'react';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useInView } from 'react-intersection-observer';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

import MenuCard from '../../components/custom/menu-card';

const menuItems = [
    {
        imageUrl: 'storage/images/home/menu-image-1.png',
        title: 'Gazpacho',
        description: 'A refreshing cold soup made of raw, blended vegetables.',
    },
    {
        imageUrl: 'storage/images/home/menu-image-2.png',
        title: 'Croquetas delemundo capita velvarde',
        description: 'A classic Spanish rice dish with saffron, seafood, and chorizo.',
    },
    {
        imageUrl: 'storage/images/home/menu-image-3.png',
        title: 'Croquetas delemundo capita velvarde',
        description: 'Crispy, creamy fritters filled with ham, cheese, or mushrooms.',
    },
    {
        imageUrl: 'storage/images/home/menu-image-2.png',
        title: 'Paella',
        description: 'A classic Spanish rice dish with saffron, seafood, and chorizo.',
    },
];

 

export default function MenuSection() {
    const [activeIndex, setActiveIndex] = useState(0);

    const { ref: h2Ref, inView: h2InView } = useInView({triggerOnce: true, threshold: 0.1, delay: 200,});
    const { ref: divRef, inView: divInView } = useInView({triggerOnce: true, threshold: 0.1, delay: 300,});
 
    return (
        <section id='menu' className="bg-cream py-8 md:pt-22">
            <div 
                ref={divRef}
                className={`
                    flex flex-col items-center
                    ${divInView ? 'fade-in-up-visible' : 'fade-in-up-initial'}
                `}
            >
                <h2 
                ref={h2Ref}
                className={`
                    font-outfit text-2xl leading-none font-light tracking-normal text-black
                    ${h2InView ? 'fade-in-up-visible' : 'fade-in-up-initial'}
                `}
                >MENU</h2>

                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    spaceBetween={100}
                    loop={true}
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: -100,
                        depth: 100,
                        modifier: 1.5,
                        slideShadows: false,
                    }}
                    modules={[EffectCoverflow, Navigation]}
                    className="w-full"
                >
                    {menuItems.map((item, index) => (
                        <SwiperSlide key={index} className="!w-[80%] md:!w-[50%] lg:!w-[40%] py-20">
                            <MenuCard imageUrl={item.imageUrl} title={item.title} description={item.description} isActive={index === activeIndex} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}

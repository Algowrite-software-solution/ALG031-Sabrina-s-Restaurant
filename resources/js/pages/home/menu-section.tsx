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
        imageUrl: 'storage/images/home/menu-image-1.webp',
        title: 'Patatas Bravas',
        description: 'Crispy golden potatoes with a smoky paprika aioli and spicy tomato sauce.',
    },
    {
        imageUrl: 'storage/images/home/menu-image-2.webp',
        title: 'Gambas al Ajillo',
        description: 'Sizzling garlic shrimp infused with olive oil, chili, and a hint of lemon zest.',
    },
    {
        imageUrl: 'storage/images/home/menu-image-3.webp',
        title: 'Jamón Ibérico',
        description: 'Aged Iberian ham hand-sliced to perfection — rich, nutty, and melt-in-your-mouth.',
    },
    {
        imageUrl: 'storage/images/home/menu-image-4.webp',
        title: 'Croquetas de Pollo',
        description: 'Creamy chicken croquettes wrapped in a golden, delicate crust.',
    },
    {
        imageUrl: 'storage/images/home/menu-image-5.webp',
        title: 'Pulpo a la Gallega',
        description: 'Tender octopus served with smoked paprika, sea salt, and olive oil over sliced potatoes.',
    },
    {
        imageUrl: 'storage/images/home/menu-image-6.webp',
        title: 'Churros con Chocolate',
        description: 'Crisp, warm churros dusted with sugar and served with rich, melted Spanish chocolate.',
    },
];

 

export default function MenuSection() {
    const [activeIndex, setActiveIndex] = useState(0);

    const { ref: h2Ref, inView: h2InView } = useInView({triggerOnce: true, threshold: 0.1, delay: 200,});
    const { ref: divRef, inView: divInView } = useInView({triggerOnce: true, threshold: 0.1, delay: 300,});
 
    return (
        <section id='menu' className="bg-cream h-screen py-5">
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
                        <SwiperSlide key={index} className="!w-[80%] md:!w-[50%] lg:!w-[30%] py-10">
                            <MenuCard imageUrl={item.imageUrl} title={item.title} description={item.description} isActive={index === activeIndex} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}

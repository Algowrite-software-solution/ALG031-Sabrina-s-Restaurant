import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

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

    const { ref: h2Ref, inView: h2InView } = useInView({ triggerOnce: true, threshold: 0.1, delay: 200 });
    const { ref: divRef, inView: divInView } = useInView({ triggerOnce: true, threshold: 0.1, delay: 300 });

    return (
        <section id="menu" className="bg-cream flex min-h-screen flex-col justify-center py-5">
            <div ref={divRef} className={`flex flex-col items-center ${divInView ? 'fade-in-up-visible' : 'fade-in-up-initial'} `}>
                <h2
                    ref={h2Ref}
                    className={`font-outfit text-2xl leading-none font-light tracking-normal text-black ${h2InView ? 'fade-in-up-visible' : 'fade-in-up-initial'} `}
                >
                    MENU
                </h2>

                <div className="relative w-full">
                    <svg
                        viewBox="0 0 1438 728"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="pointer-events-none absolute inset-x-0 top-0 z-0 h-auto w-full"
                        aria-hidden="true"
                    >
                        <path
                            d="M0.107422 540.5C253.696 484.758 401.747 386.281 323.72 263.649C245.693 141.017 161.163 233.548 206.679 294.493C252.195 355.437 481.775 395.943 698.85 329.796C915.926 263.649 966.443 93.0789 1072.48 38.0803C1178.52 -16.9183 1393.59 -6.88475 1439.11 38.0803"
                            stroke="#B6B6B6"
                        />
                    </svg>

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
                        className="relative z-10 w-full"
                    >
                        {menuItems.map((item, index) => (
                            <SwiperSlide key={index} className="!w-[80%] py-10 md:!w-[50%] lg:!w-[30%]">
                                <MenuCard
                                    imageUrl={item.imageUrl}
                                    title={item.title}
                                    description={item.description}
                                    isActive={index === activeIndex}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}

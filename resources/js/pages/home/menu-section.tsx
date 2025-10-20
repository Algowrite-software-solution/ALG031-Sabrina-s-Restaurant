import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

import MenuCard from '../../components/custom/menu-card';

const menuItems = [
  {
    imageUrl: 'storage/images/home/menu-image-1.png',
    title: 'Gazpacho',
    description: 'A refreshing cold soup made of raw, blended vegetables.'
  },
  {
    imageUrl: 'storage/images/home/menu-image-2.png',
    title: 'Paella',
    description: 'A classic Spanish rice dish with saffron, seafood, and chorizo.'
  },
  {
    imageUrl: 'storage/images/home/menu-image-3.png',
    title: 'Croquetas',
    description: 'Crispy, creamy fritters filled with ham, cheese, or mushrooms.'
  },
  {
    imageUrl: 'storage/images/home/menu-image-2.png',
    title: 'Paella',
    description: 'A classic Spanish rice dish with saffron, seafood, and chorizo.'
  },
];

export default function MenuSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="font-outfit text-black text-2xl font-light leading-none tracking-normal mb-12">
          MENU
        </h2>

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
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: false, 
          }}
          modules={[EffectCoverflow, Navigation]}
          className="w-full"
        >
          {menuItems.map((item, index) => (
            <SwiperSlide key={index} className="!w-[80%] md:!w-[50%] lg:!w-[40%]">
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
    </section>
  );
}
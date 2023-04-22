'use client';
import { useMediaQuery, Image } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, A11y } from 'swiper';
import { desktopHeroImages, mobileHeroImages } from './constants';
import './swiper.css';
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function HomeHero() {
  const [isLargerThanTablet] = useMediaQuery('(min-width: 768px)');
  const images = isLargerThanTablet ? desktopHeroImages : mobileHeroImages;
  return (
    <Swiper
      modules={[Pagination, Navigation, A11y, Autoplay]}
      className='mySwiper'
      navigation={{ enabled: true }}
      pagination={{ clickable: true, dynamicBullets: true }}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: true,
      }}
    >
      {images.map((img, i) => (
        <SwiperSlide key={i}>
          <Image src={img.src} alt={img.alt} w='100%' />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

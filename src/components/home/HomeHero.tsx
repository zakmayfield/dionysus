'use client';
import { Box, useMediaQuery } from '@chakra-ui/react';
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
          <Box
            bgPosition='center'
            bgRepeat='no-repeat'
            bgSize='cover'
            bgImage={img.src}
            minH={{ md: '617px', base: '700' }}
          ></Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

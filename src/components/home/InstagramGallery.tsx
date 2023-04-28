import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import { Box } from '@chakra-ui/react';
import { useGalleryContext } from '@/context/GalleryContext';
import './swiper.css';
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const InstagramGallery = () => {
  const { data } = useGalleryContext();

  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={5}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Pagination]}
      >
        {data.map((post) => (
          <SwiperSlide key={post.id}>
            {' '}
            <Box
              bgPosition='center'
              bgRepeat='no-repeat'
              bgSize='cover'
              bgImage={post.media_url}
              w='400px'
              h='400px'
            />{' '}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

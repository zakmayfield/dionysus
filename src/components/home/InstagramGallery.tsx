import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import { Box, useMediaQuery, Image } from '@chakra-ui/react';
import { useGalleryContext } from '@/context/GalleryContext';
import { ContentContainer } from '@/shared/components';
import './swiper.css';
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const IgSwiper = () => {
  const { data } = useGalleryContext();
  const [isLargerThanTablet] = useMediaQuery('(min-width: 768px)');

  return (
    <Swiper
      modules={[Pagination, Navigation]}
      slidesPerView={isLargerThanTablet ? 5 : 2}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      navigation
    >
      {data.map((post) => (
        <SwiperSlide key={post.id} style={{ border: '1px solid black' }}>
          {' '}
          {/* <Box
            bgPosition='center'
            bgRepeat='no-repeat'
            bgSize='cover'
            bgImage={post.media_url}
            w='250px'
            h='250px'
          />{' '} */}
          <Box>
            <Image src={post.media_url} alt='instagram post by chasers juice' />
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export const InstagramGallery = () => {
  return (
    <Box>
      <ContentContainer maxW='container.2xl' my='8' px='12'>
        <IgSwiper />
      </ContentContainer>
    </Box>
  );
};

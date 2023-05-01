'use client';
import { Box, useMediaQuery, Image, Flex } from '@chakra-ui/react';
import Slider from 'react-slick';
import { useGalleryContext } from '@/context/GalleryContext';
import { ContentContainer } from '@/shared/components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const IgSwiper = () => {
  const { data } = useGalleryContext();
  const [isLargerThanTablet] = useMediaQuery('(min-width: 768px)');

  const sliderSettings = {
    dots: false,
    infinite: true,
    slidesToShow: isLargerThanTablet ? 4 : 2,
    slidesToScroll: isLargerThanTablet ? 3 : 2,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    cssEase: 'linear',
    pauseOnHover: true,
    arrows: false,
  };

  return (
    <Box>
      <Slider {...sliderSettings}>
        {data.map((post) => (
          <Flex key={post.id}>
            <Image
              boxSize='xs'
              fit='scale-down'
              src={post.media_url}
              alt='Instagram Post by @chasersjuicetoronto'
              mx='auto'
            />
          </Flex>
        ))}
      </Slider>
    </Box>
  );
};

export const InstagramGallery = () => {
  return (
    <Box>
      <ContentContainer maxW='container.2xl' py='12'>
        <IgSwiper />
      </ContentContainer>
    </Box>
  );
};

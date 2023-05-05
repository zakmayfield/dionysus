import { Box, Flex, useMediaQuery, Image, AspectRatio } from '@chakra-ui/react';
import Slider from 'react-slick';
import NextLink from 'next/link';
import { useGalleryContext } from './context/GalleryContext';
import { ContentContainer, MotionBox } from '@/shared/components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const InstagramCarousel = () => {
  const [isLargerThanTablet] = useMediaQuery('(min-width: 768px)');
  const { data } = useGalleryContext();

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
        {/* TODO we need error handling for this data, when there is no data/access this breaks */}
        {data.map((post) => {
          return (
            <Flex key={post.id}>
              <NextLink href={post.permalink} target='_blank'>
                <Box position='relative' mt='2'>
                  {/* Overlay that disappears on hover: */}
                  <MotionBox
                    position='absolute'
                    top='0'
                    left='0'
                    w='full'
                    h='full'
                    bgColor='black'
                    opacity='15%'
                    zIndex={10}
                    whileHover={{ opacity: '0%' }}
                  />
                  <AspectRatio ratio={1 / 1}>
                    <Image
                      boxSize='xs'
                      fit='scale-down'
                      src={post.media_url}
                      alt='Instagram Post by @chasersjuicetoronto'
                      mx='auto'
                    />
                  </AspectRatio>
                </Box>
              </NextLink>
            </Flex>
          );
        })}
      </Slider>
    </Box>
  );
};

export const InstagramGallery = () => {
  return (
    <Box>
      <ContentContainer maxW='container.2xl' px='0'>
        <InstagramCarousel />
      </ContentContainer>
    </Box>
  );
};

export default InstagramGallery;

/* eslint-disable @typescript-eslint/no-unused-vars */
import { useRef } from 'react';
import {
  Box,
  Flex,
  useMediaQuery,
  AspectRatio,
  Text,
  Button,
  Icon,
  ButtonProps,
  Image,
} from '@chakra-ui/react';
import Slider from 'react-slick';
import NextLink from 'next/link';
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';
import { Post, useGalleryContext } from './context/GalleryContext';
import { ContentContainer, MotionBox } from '@/shared/components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './instagram-gallery.css';

type SlickButtonFixProps = ButtonProps & {
  slideCount?: number;
  currentSlide?: number;
};

const NextIcon = ({
  currentSlide,
  slideCount,
  ...props
}: SlickButtonFixProps) => (
  <Button variant='unstyled' py='10' aria-label='Next' {...props}>
    <Icon
      as={BsChevronRight}
      color='white'
      _hover={{ transform: 'scale(1.2)' }}
      transition='all ease 500ms'
      w='14'
      h='14'
    />
  </Button>
);
const PrevIcon = ({
  currentSlide,
  slideCount,
  ...props
}: SlickButtonFixProps) => (
  <Button variant='unstyled' py='10' aria-label='Next' {...props}>
    <Icon
      as={BsChevronLeft}
      color='white'
      _hover={{ transform: 'scale(1.2)' }}
      transition='all ease 500ms'
      w='14'
      h='14'
    />
  </Button>
);

type InstagramCarouselProps = {
  data: Post[];
};

const InstagramCarousel = ({ data }: InstagramCarouselProps) => {
  const [isLargerThanTablet] = useMediaQuery('(min-width: 768px)');
  const sliderRef = useRef<Slider>(null);

  const NextTrigger = () => {
    sliderRef?.current?.slickNext();
  };
  const PrevTrigger = () => {
    sliderRef?.current?.slickPrev();
  };

  const sliderSettings = {
    dots: false,
    infinite: true,
    slidesToShow: isLargerThanTablet ? 4 : 2,
    slidesToScroll: 2,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    cssEase: 'linear',
    pauseOnHover: true,
    nextArrow: <NextIcon onClick={NextTrigger} />,
    prevArrow: <PrevIcon onClick={PrevTrigger} />,
  };

  return (
    <Box>
      <Slider ref={sliderRef} {...sliderSettings}>
        {data.map((post) => {
          return (
            <Flex key={post.id}>
              <NextLink
                href={post.permalink}
                target='_blank'
                aria-label='Open the full instagram post'
              >
                <Box position='relative' mb='-2'>
                  {/* Overlay that appears on hover: */}
                  <MotionBox
                    position='absolute'
                    inset='0'
                    opacity='0%'
                    zIndex={10}
                    whileHover={{ opacity: '100%' }}
                  >
                    <Box
                      bg='blackAlpha.700'
                      w='full'
                      h='full'
                      p='6'
                      display='flex'
                      justifyContent='center'
                      alignItems='center'
                    >
                      <Text color='white' noOfLines={6}>
                        {post.caption}
                      </Text>
                    </Box>
                  </MotionBox>
                  <AspectRatio ratio={1 / 1}>
                    <Image
                      src={post.media_url}
                      alt='Instagram Post by @chasersjuicetoronto'
                      width={350}
                      height={350}
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
  const { data } = useGalleryContext();

  if (!data || data.length < 1) {
    return null;
  }
  return (
    <Box>
      <ContentContainer maxW='container.2xl' px='0'>
        <InstagramCarousel data={data} />
      </ContentContainer>
    </Box>
  );
};

export default InstagramGallery;

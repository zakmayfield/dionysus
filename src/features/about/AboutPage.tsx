'use client';
import { Box, Flex } from '@chakra-ui/react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Heading,
} from '@chakra-ui/react';
// import Image from 'next/image';
import { ContentContainer } from '@/shared/components';
import blueberries from '@/shared/assets/about/blueberries.jpeg';
import mixedberries from '@/shared/assets/about/mixedberries.jpeg';
import redberries from '@/shared/assets/about/redberries.jpeg';
import moreberries from '@/shared/assets/about/moreberries.jpeg';

/*
  Tabs on the about page, when clicked will set the URL query params to tab=TAB_NAME
  The hero will search the query params for the TAB_NAME & display respective hero img
*/

export default function AboutPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const tab = searchParams?.get('tab') ?? 'ABOUT';
  const qs = new URLSearchParams();

  const tabData = [
    { id: 0, tabName: 'about', param: 'ABOUT', img: blueberries.src },
    { id: 1, tabName: 'philosophy', param: 'PHILOSOPHY', img: moreberries.src },
    { id: 2, tabName: 'wholesale', param: 'WHOLESALE', img: mixedberries.src },
    {
      id: 3,
      tabName: 'delivery Area',
      param: 'DELIVERY_AREA',
      img: redberries.src,
    },
  ];

  function handleOnChange(index: number) {
    const tabParam = tabData[index].param;
    qs.set('tab', tabParam);
    router.push(`${pathname}?${qs.toString()}`);
  }

  const currentTabData = tabData.find(
    (tabDataItem) => tabDataItem.param === tab
  ) as (typeof tabData)[number];

  return (
    <Box m='0' p='0' w='full'>
      {/* Hero Image */}
      <Flex
        w='full'
        minH={{ base: '300px' }}
        position='relative'
        justifyContent='center'
        alignItems='center'
        bgPosition='center'
        bgRepeat='no-repeat'
        bgSize='cover'
        bgImage={currentTabData?.img}
      >
        {/* Overylay */}
        {/* <Box position='absolute' inset='0' bg='rgba(0, 0, 0, 0.5)' /> */}

        {/* <Image
          src={currentTabData?.img}
          alt='fruit'
          width={2000}
          height={500}
        /> */}

        <Box textTransform='capitalize' color='white' zIndex='2'>
          <Heading
            as='h1'
            fontWeight='light'
            letterSpacing='widest'
            fontSize='5xl'
          >
            {currentTabData.tabName}
          </Heading>
        </Box>
      </Flex>

      {/* Tab Container */}
      <ContentContainer maxW='container.2xl'>
        <Box>
          <Tabs
            align='center'
            onChange={(index) => handleOnChange(index)}
            defaultIndex={0}
          >
            <TabList>
              {tabData.map((el) => (
                <Tab key={el.id} textTransform='capitalize'>
                  {el.tabName}
                </Tab>
              ))}
            </TabList>

            <TabPanels>
              <TabPanel>
                <p>one</p>
              </TabPanel>
              <TabPanel>
                <p>two</p>
              </TabPanel>
              <TabPanel>
                <p>three</p>
              </TabPanel>
              <TabPanel>
                <p>four</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </ContentContainer>
    </Box>
  );
}

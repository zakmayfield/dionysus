'use client';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from '@chakra-ui/react';
import { About, Philosophy, Wholesale, DeliveryArea } from './TabContent';
import { ContentContainer } from '@/shared/components';
import blueberries from '@/shared/assets/about/blueberries.jpeg';
import mixedberries from '@/shared/assets/about/mixedberries.jpeg';
import redberries from '@/shared/assets/about/redberries.jpeg';
import moreberries from '@/shared/assets/about/moreberries.jpeg';
import { TabHero } from '@/shared/components/TabHero';

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
      <TabHero currentTabData={currentTabData} />

      {/* Tab Container */}
      <ContentContainer maxW='container.2xl' px={{ base: '0', md: '8' }}>
        <Box>
          <Tabs
            align='center'
            onChange={(index) => handleOnChange(index)}
            defaultIndex={0}
          >
            <TabList>
              {tabData.map((el) => (
                <Tab
                  key={el.id}
                  textTransform='capitalize'
                  fontSize={{ base: 'x-small', sm: 'sm', md: 'md' }}
                >
                  {el.tabName}
                </Tab>
              ))}
            </TabList>

            <TabPanels>
              <TabPanel p='0'>
                <About />
              </TabPanel>
              <TabPanel p='0'>
                <Philosophy />
              </TabPanel>
              <TabPanel p='0'>
                <Wholesale />
              </TabPanel>
              <TabPanel p='0'>
                <DeliveryArea />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </ContentContainer>
    </Box>
  );
}

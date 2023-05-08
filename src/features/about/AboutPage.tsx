'use client';
import { useEffect, useState } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from '@chakra-ui/react';
import { tabData } from './constants';
import { About, Philosophy, Wholesale, DeliveryArea } from './TabContent';
import { ContentContainer, Hero } from '@/shared/components';

export const AboutPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const tab = searchParams?.get('tab') ?? '';
  const qs = new URLSearchParams();

  function handleOnChange(index: number) {
    const selectedTab = tabData[index];
    const tabParam = selectedTab.param;

    qs.set('tab', tabParam);
    router.push(`${pathname}?${qs.toString()}`);
  }

  let currentTabData = tabData.find(
    (tabDataItem) => tabDataItem.param === tab
  ) as (typeof tabData)[number];

  if (!currentTabData) {
    currentTabData = tabData[0];
    qs.set('tab', currentTabData.param);
    router.push(`${pathname}?${qs.toString()}`);
  }

  const { tabName, imgSrc } = currentTabData;

  const [activeTab, setActiveTab] = useState(() => currentTabData.id);

  useEffect(() => {
    setActiveTab(currentTabData.id);
  }, [currentTabData]);

  return (
    <Box m='0' p='0' w='full'>
      <Hero title={tabName} imgSrc={imgSrc} />

      {/* Tab Container */}
      <ContentContainer maxW='container.2xl' px={{ base: '0', md: '8' }}>
        <Box>
          <Tabs
            align='center'
            index={activeTab}
            onChange={(index) => handleOnChange(index)}
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
};

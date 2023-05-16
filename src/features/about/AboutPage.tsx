'use client';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from '@chakra-ui/react';
import { useActiveTab } from '../../shared/hooks/useActiveTab';
import { OrderHero } from './OrderHero';
import { tabData } from './constants';
import { OurStory, Philosophy, Wholesale, DeliveryArea } from './TabPanels';
import { ContentContainer, Hero2 } from '@/shared/components';

export const AboutPage = () => {
  const { tabName, imgSrc, activeTab, handleOnChange } = useActiveTab();

  return (
    <Box m='0' p='0' w='full'>
      <Hero2 />

      {/* Tab Container */}
      <ContentContainer
        maxW='container.2xl'
        px={{ base: '0', md: '8' }}
        minH='90vh'
      >
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
                <OurStory />
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

      <OrderHero />
    </Box>
  );
};

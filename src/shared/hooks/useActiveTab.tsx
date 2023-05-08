import { useState, useEffect } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { tabData } from '../../features/about/constants';

type UseActiveTabReturn = {
  tabName: string;
  imgSrc: string;
  activeTab: number;
  handleOnChange: (index: number) => void;
};

export const useActiveTab = (): UseActiveTabReturn => {
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

  return { tabName, imgSrc, activeTab, handleOnChange };
};

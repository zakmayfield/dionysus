import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import blueberries from '@/shared/assets/about/blueberries.jpeg';
import mixedberries from '@/shared/assets/about/mixedberries.jpeg';
import redberries from '@/shared/assets/about/redberries.jpeg';

const paths = ['our-story', 'philosophy', 'delivery-area'];
const images = [blueberries, redberries, mixedberries];

export const useActivePathHero = () => {
  const pathname = usePathname();
  const [heroImg, setHeroImg] = useState<any>('');

  useEffect(() => {
    // split pathname at /
    const pathParts = pathname.split('/');
    // selecting the pathIndex // TODO this is currently limiting - if there are additional url items this will throw -1
    const pathIndex = paths.indexOf(pathParts[pathParts.length - 1]);

    handlePathChange(pathIndex);
  }, [pathname]);

  function handlePathChange(pathIndex: number) {
    if (pathIndex !== -1) {
      setHeroImg(images[pathIndex]);
    } else {
      setHeroImg('HERO_1_FAILSAFE');
    }
  }

  return { heroImg };
};

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import blueberries from '@/shared/assets/about/blueberries.jpeg';
import mixedberries from '@/shared/assets/about/mixedberries.jpeg';
import redberries from '@/shared/assets/about/redberries.jpeg';
import moreberries from '@/shared/assets/about/moreberries.jpeg';

const paths = ['our-story', 'philosophy', 'wholesale', 'delivery-area'];
const images = [blueberries, moreberries, mixedberries, redberries];

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

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { pathData, pathItem } from '@/features/about';

export const useActivePathHero = () => {
  const pathname = usePathname();
  const [pathHero, setPathHero] = useState<pathItem | undefined>(undefined);

  useEffect(() => {
    const pathParts = pathname.split('/');
    const path = pathParts[pathParts.length - 1];

    const pathObject = pathData.find((item) => item.slug === path);

    handlePathChange(pathObject);
  }, [pathname]);

  function handlePathChange(pathObject: pathItem | undefined) {
    setPathHero(pathObject);
  }

  return { pathHero };
};

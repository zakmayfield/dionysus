'use client';
import { useActivePathHero } from '../hooks/useActivePathHero';
import { Hero } from './Hero';

export const DynamicAboutHero = () => {
  const { pathHero } = useActivePathHero();
  return (
    <Hero
      title={pathHero?.title ?? ''}
      altText={pathHero?.altText ?? ''}
      img={pathHero?.img ?? ''}
      motionKey={pathHero?.title}
    />
  );
};

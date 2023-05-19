'use client';
import { useActivePathHero } from '../hooks/useActivePathHero';
import { Hero } from './Hero';

export const DynamicAboutHero = () => {
  const { pathHero } = useActivePathHero();
  return (
    <Hero
      title={pathHero?.title ?? ''}
      img={pathHero?.img ?? ''}
      key={pathHero?.title}
    />
  );
};

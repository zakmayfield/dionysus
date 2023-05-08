import { sharedMetadata } from '@/shared/metadata';
import AboutPage from '@/features/about/AboutPage';

export const metadata = {
  ...sharedMetadata,
  title: 'Chasers Fresh Juice | About',
};

export default function About() {
  return <AboutPage />;
}

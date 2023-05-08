import { FaqPage } from '@/features/faq/FaqPage';
import { sharedMetadata } from '@/shared/metadata';

export const metadata = {
  ...sharedMetadata,
  title: 'Chasers Fresh Juice | FAQ',
};

export default function Faq() {
  return <FaqPage />;
}

import { NotFoundPage } from '@/features/notFound';
import { sharedMetadata } from '@/shared/metadata';

export const metadata = {
  ...sharedMetadata,
  title: 'Chasers Fresh Juice | 404 Not Found',
};

export default function NotFound() {
  return <NotFoundPage />;
}

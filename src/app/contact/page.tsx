import { ContactPage } from '@/features/contact/ContactPage';
import { sharedMetadata } from '@/shared/metadata';

export const metadata = {
  ...sharedMetadata,
  title: 'Chasers Fresh Juice | Contact',
};

export default function Contact() {
  return <ContactPage />;
}

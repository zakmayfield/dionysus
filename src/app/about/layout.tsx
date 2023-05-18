import { ContentContainer, DynamicAboutHero } from '@/shared/components';
import { Links, OrderHero } from '@/features/about';
import { sharedMetadata } from '@/shared/metadata';

export const metadata = {
  ...sharedMetadata,
  title: 'Chasers Fresh Juice | About',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <DynamicAboutHero />
      <Links />

      <ContentContainer maxW='container.2xl' px={{ base: '0', md: '8' }}>
        {children}
      </ContentContainer>

      <OrderHero />
    </section>
  );
}

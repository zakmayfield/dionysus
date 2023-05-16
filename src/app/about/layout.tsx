import { ContentContainer, Hero2 } from '@/shared/components';
import { Links } from '@/features/about';

export const metadata = {
  title: 'About',
  description: 'About page',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Hero2 />
      <Links />

      <ContentContainer
        maxW='container.2xl'
        px={{ base: '0', md: '8' }}
        minH='90vh'
      >
        {children}
      </ContentContainer>
    </section>
  );
}
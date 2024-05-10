'use client';
import { PrivacyChunk } from './PrivacyChunk';
import { privacyPolicy } from './constants';
import { ContentContainer, FadeInBox } from '@/shared/components';

export const PrivacyPage = () => {
  return (
    <ContentContainer maxW='container.lg' py={{ md: '12', base: '12' }}>
      {privacyPolicy.map((chunk) => (
        <FadeInBox key={chunk.id}>
          <PrivacyChunk key={chunk.title} chunk={chunk} />
        </FadeInBox>
      ))}
    </ContentContainer>
  );
};

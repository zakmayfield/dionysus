import 'server-only';
import { GalleryContextProvider } from '@/features/home/context/GalleryContext';
import HomePage from '@/features/home/HomePage';
import { getInstagramData } from '@/shared/utils/getInstagramData';
import { sharedMetadata } from '@/shared/metadata';

export const metadata = sharedMetadata;

export default async function Home() {
  // const { data } = await getInstagramData();
  return (
    // <GalleryContextProvider data={data}>
    <HomePage />
    // </GalleryContextProvider>
  );
}

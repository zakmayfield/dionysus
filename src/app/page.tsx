import { GalleryContextProvider } from '@/components/home/context/GalleryContext';
import HomePage from '@/components/home/HomePage';
import { getInstagramData } from '@/shared/utils/getInstagramData';

export default async function Home() {
  const data = await getInstagramData();
  return (
    <GalleryContextProvider data={data}>
      <HomePage />
    </GalleryContextProvider>
  );
}

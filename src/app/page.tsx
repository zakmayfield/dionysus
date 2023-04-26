import HomePage from '@/components/home/HomePage';
import { GalleryContextProvider } from '@/context/GalleryContext';

async function getData() {
  const url = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink&access_token=${process.env.IG_KEY}`;

  const data = await fetch(url);

  return data.json();
}

export default async function Home() {
  const { data } = await getData();

  return (
    <GalleryContextProvider data={data}>
      <HomePage />
    </GalleryContextProvider>
  );
}

import { GetServerSideProps } from 'next';
import HomePage from '@/features/home/HomePage';
import {
  GalleryContextProvider,
  GalleryContextValues,
} from '@/features/home/context/GalleryContext';

type Data = GalleryContextValues['data'];

export const getServerSideProps: GetServerSideProps<{
  data: Data;
}> = async () => {
  const res = await fetch(
    `https://graph.instagram.com/me/media?fields=id,caption,media_url,media_type,permalink&access_token=${process.env.IG_KEY}`
  );
  const data: GalleryContextValues = await res.json();

  return {
    props: {
      data: data.data,
    },
  };
};

export default function Home({ data }: { data: Data }) {
  return (
    <GalleryContextProvider data={data}>
      <HomePage />
    </GalleryContextProvider>
  );
}

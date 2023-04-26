import { useGalleryContext } from '@/context/GalleryContext';

export const InstagramGallery = () => {
  const { data } = useGalleryContext();

  console.log(data);

  return <div>Instagram Gallery</div>;
};

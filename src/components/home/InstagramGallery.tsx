import { useGalleryContext } from '@/context/GalleryContext';

export const InstagramGallery = () => {
  const { data } = useGalleryContext();

  return <div>Instagram Gallery</div>;
};

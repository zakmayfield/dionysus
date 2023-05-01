'use client';
import { createContext, useContext, PropsWithChildren } from 'react';

export interface Post {
  id: string;
  caption: string;
  media_type: string;
  media_url: string;
  permalink: string;
}

type ContextType = {
  data: Post[];
};

const GalleryContext = createContext<ContextType>({
  data: [],
});

type GalleryProviderProps = PropsWithChildren & {
  data: string;
};

export const GalleryContextProvider = ({
  data,
  children,
}: GalleryProviderProps) => {
  return (
    <GalleryContext.Provider value={{ data: JSON.parse(data).data }}>
      {children}
    </GalleryContext.Provider>
  );
};

export const useGalleryContext = () => useContext(GalleryContext);

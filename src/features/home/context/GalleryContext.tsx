'use client';
import { createContext, useContext, PropsWithChildren } from 'react';

export interface Post {
  id: string;
  caption: string;
  media_type: string;
  media_url: string;
  permalink: string;
}

export type GalleryContextValues = {
  data: Post[];
};

const GalleryContext = createContext<GalleryContextValues>({
  data: [],
});

type GalleryProviderProps = PropsWithChildren & {
  data: Post[];
};

export const GalleryContextProvider = ({
  data,
  children,
}: GalleryProviderProps) => {
  return (
    <GalleryContext.Provider value={{ data }}>
      {children}
    </GalleryContext.Provider>
  );
};

export const useGalleryContext = () => useContext(GalleryContext);

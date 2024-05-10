export type ContentItem = {
  id: number;
  body: string;
};

export type PrivacyPolicyChunk = {
  id: number;
  title: string;
  content: ContentItem[];
};

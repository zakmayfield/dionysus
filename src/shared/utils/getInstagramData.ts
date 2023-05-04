import 'server-only';

export const getInstagramData = async () => {
  const response = await fetch(
    `https://graph.instagram.com/me/media?fields=id,caption,media_url,media_type,permalink&access_token=${process.env.IG_KEY}`
  );

  const data = await response.json();

  return data;
};

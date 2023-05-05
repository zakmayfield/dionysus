import 'server-only';

export const getInstagramData = async () => {
  try {
    const response = await fetch(
      `https://graph.instagram.com/me/media?fields=id,caption,media_url,media_type,permalink&access_token=${process.env.IG_KEY}`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch the data');
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to get Instagram data');
  }
};

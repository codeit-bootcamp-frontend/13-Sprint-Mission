const baseUrl = "https://panda-market-api.vercel.app";

export const getItems = async (url) => {
  const response = await fetch(`${baseUrl}${url}`);
  const body = response.json();
  return body;
};

export const fetchData = async (page, pageSize) => {
  const baseURL = "https://panda-market-api.vercel.app/products/";
  const queryString = new URLSearchParams({
    page: page,
    pageSize: pageSize,
  }).toString();
  const requrl = `${baseURL}?${queryString}`;

  const response = await fetch(requrl, {
    method: "GET",
  });
  const data = await response.json();
  return data;
};

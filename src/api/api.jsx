export const fetchData = async (
  page,
  pageSize,
  orderBy = "recent",
  keyword = null,
) => {
  const baseURL = "https://panda-market-api.vercel.app/products/";
  const params = new URLSearchParams({
    page: page,
    pageSize: pageSize,
    orderBy: orderBy,
  });

  if (keyword) {
    params.append("keyword", keyword);
  }

  const requrl = `${baseURL}?${params.toString()}`;

  const response = await fetch(requrl, {
    method: "GET",
  });
  const data = await response.json();
  return data;
};

const BASE_URL = "https://panda-market-api.vercel.app/products/";

export const getItems = async (
  page,
  pageSize,
  orderBy = "recent",
  keyword = null,
) => {
  const params = new URLSearchParams({
    page: page,
    pageSize: pageSize,
    orderBy: orderBy,
  });

  if (keyword) {
    params.append("keyword", keyword);
  }

  const requrl = `${BASE_URL}?${params.toString()}`;

  const response = await fetch(requrl, {
    method: "GET",
  });
  const data = await response.json();
  return data;
};

export const postItem = async (item) => {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });
  const data = await response.json();
  return data;
};

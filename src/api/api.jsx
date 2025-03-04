const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const PRODUCT_API_URL = `${API_BASE_URL}/products/`;

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

  const requrl = `${PRODUCT_API_URL}?${params.toString()}`;

  const response = await fetch(requrl, {
    method: "GET",
  });
  const data = await response.json();
  return data;
};

export const postItem = async (item) => {
  const response = await fetch(PRODUCT_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });
  const data = await response.json();
  return data;
};

import instance from "@/api/axiosInstance";

const PRODUCT_ENDPOINT = `/products`;

export const getItems = async (
  page,
  pageSize,
  orderBy = "recent",
  keyword = null,
) => {
  const params = {
    page: page,
    pageSize: pageSize,
    orderBy: orderBy,
  };

  if (keyword) {
    params[keyword] = keyword;
  }

  const response = await instance.get(PRODUCT_ENDPOINT, {
    params: params,
  });

  const data = response.data;
  return data;
};

export const postItem = async (item) => {
  const response = await axios.post(PRODUCT_ENDPOINT, item);
  const data = response.data;
  return data;
};

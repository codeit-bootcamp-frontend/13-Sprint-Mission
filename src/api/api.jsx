import instance from "@/api/axiosInstance";

const PRODUCT_ENDPOINT = `/products`;
const IMAGE_ENDPOINT = `/images/upload`;

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
  const response = await instance.post(PRODUCT_ENDPOINT, item);
  const data = response.data;
  return data;
};

export const uploadImage = async (image) => {
  const response = await instance.post(IMAGE_ENDPOINT, { image });
  const data = response.data;

  return data;
};

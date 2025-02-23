import api from "./index";

export async function getProducts(params) {
  const { page, pageSize, orderBy, keyword } = params;
  const response = await api.get(`/products`, {
    params: { page, pageSize, orderBy, keyword },
  });

  return response.data;
}

export async function getProductInfo(productId) {
  const response = await api.get(`/products/${productId}`);

  return response.data;
}

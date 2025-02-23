import api from "./index";

export async function getComments(productId, limit = 3) {
  const response = await api.get(
    `/products/${productId}/comments?limit=${limit}`
  );

  return response.data.list;
}

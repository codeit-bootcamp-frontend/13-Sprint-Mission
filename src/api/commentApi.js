//commentApi.js
import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

export async function getComments(productId) {
  const response = await axios.get(
    `${BASE_URL}/products/${productId}/comments?limit=3`
  );

  return response.data.list;
}

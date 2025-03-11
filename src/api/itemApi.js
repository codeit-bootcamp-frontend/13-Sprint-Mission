//itemApi.js
import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

export async function getProducts({ page, pageSize, orderBy, keyword }) {
  try {
    const response = await axios.get(`${BASE_URL}/products`, {
      params: { page, pageSize, orderBy, keyword },
    });

    return response.data;
  } catch (error) {
    throw new Error(`HTTP error: ${error.response?.status || error.message}`);
  }
}

export async function getProductInfo(productId) {
  const response = await axios.get(`${BASE_URL}/products/${productId}`);

  return response.data;
}

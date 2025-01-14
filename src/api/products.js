import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

export async function getProducts(params) {
  const { page, pageSize, orderBy, keyword } = params;
  const response = await axios.get(`${BASE_URL}/products`, {
    params: { page, pageSize, orderBy, keyword },
  });

  return response.data;
}

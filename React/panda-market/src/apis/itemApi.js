import axios from "axios";

const instance = axios.create({
  baseURL: "https://panda-market-api.vercel.app",
});

const COMMENTS_LIMIT = 3;

export async function getItems({ page = "", pageSize = "", order = "" }) {
  const query = new URLSearchParams({ page, pageSize, orderBy: order });
  try {
    const res = await instance.get(`/products?${query}`);
    return res.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getItemById(productId = "") {
  try {
    const res = await instance.get(`/products/${productId}`);
    return res.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getItemComments(productId = "", { cursor = 0 }) {
  const query = new URLSearchParams({ cursor, limit: COMMENTS_LIMIT });
  try {
    const res = await instance.get(`/products/${productId}/comments?${query}`);
    return res.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

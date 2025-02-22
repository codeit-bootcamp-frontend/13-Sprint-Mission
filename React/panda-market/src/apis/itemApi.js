import axios from "axios";

const instance = axios.create({
  baseURL: "https://panda-market-api.vercel.app",
});

const COMMENTS_LIMIT = 3;

export async function getItems({ page = "", pageSize = "", order = "" }) {
  const query = `page=${page}&pageSize=${pageSize}&orderBy=${order}`;
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
  const query = `limit=${COMMENTS_LIMIT}&cursor=${cursor}`;
  try {
    const res = await instance.get(`/products/${productId}/comments?${query}`);
    return res.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

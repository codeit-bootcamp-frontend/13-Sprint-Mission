import axios from "axios";

const instance = axios.create({
  baseURL: "https://panda-market-api.vercel.app",
});

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

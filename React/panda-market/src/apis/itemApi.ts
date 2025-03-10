import axios from "axios";
import { Product, Comment } from "../utils/types";

const instance = axios.create({
  baseURL: "https://panda-market-api.vercel.app",
});

const COMMENTS_LIMIT = 3;

export interface GetItemsResponse {
  list: Product[];
  totalCount?: number;
}

export interface GetCommentsResponse {
  list: Comment[] | null;
  nextCursor: number | null;
}

export async function getItems({
  page = "",
  pageSize = "",
  order = "",
}: {
  page: string;
  pageSize: string;
  order: string;
}): Promise<GetItemsResponse> {
  const query = new URLSearchParams({ page, pageSize, orderBy: order });
  try {
    const res = await instance.get(`/products?${query}`);
    return res.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getItemById(productId: string): Promise<Product> {
  try {
    const res = await instance.get(`/products/${productId}`);
    return res.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getItemComments(
  productId: string,
  { cursor = 0 }: { cursor: number }
): Promise<GetCommentsResponse> {
  const query = new URLSearchParams({
    cursor: cursor.toString(),
    limit: COMMENTS_LIMIT.toString(),
  });
  try {
    const res = await instance.get(`/products/${productId}/comments?${query}`);
    return res.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

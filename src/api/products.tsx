import { AddItem } from "../components/pages/AddItemPage/AddItemPage";
import api from "./index";

export interface Items {
  id: string;
  images: string;
  name: string;
  price: number;
  favoriteCount: number;
}

interface Params {
  page: number;
  pageSize: number;
  orderBy: string;
  keyword: string;
}

export interface DetailItem extends Omit<AddItem, "images"> {
  images: string | null;
  favoriteCount: number;
  createdAt: string;
  updatedAt: string;
  ownerNickname: string;
}

export async function getProducts(params: Params) {
  const { page, pageSize, orderBy, keyword } = params;
  const response = await api.get(`/products`, {
    params: { page, pageSize, orderBy, keyword },
  });

  return response.data;
}

export async function getProductInfo(productId: string): Promise<DetailItem> {
  const response = await api.get(`/products/${productId}`);

  return response.data;
}

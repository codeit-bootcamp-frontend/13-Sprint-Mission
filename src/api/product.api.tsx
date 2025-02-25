import axios from "axios";
const BASE_URL = "https://panda-market-api.vercel.app";
//

export interface ResponseData extends Product {
  createdAt: string;
  favoriteCount: number;
  ownerNickname: string;
  ownerId: number;
  id: number;
  isFavorite: boolean;
}
export type Item = Omit<ResponseData, "ownernickname" | "isFavorite">;

export async function getProducts({
  device = "desktop",
  page = 1,
  selectedOrder = "최신순",
}) {
  const order = selectedOrder === "최신순" ? "recent" : "favorite";
  const pageSize = device === "mobile" ? 4 : device === "tablet" ? 6 : 10;
  const query = `?orderBy=${order}&page=${page}&pageSize=${pageSize}`;

  try {
    const res = await axios.get(`${BASE_URL}/products${query}`);
    if (!res) throw new Error("상품 불러오기 실패");
    const data: Item[] = res.data.list;
    return data;
  } catch (error) {
    console.error(error, "상품 불러오기 실패");
  }
}

export async function bestProducts({ device }: Device) {
  const pageSize = device === "mobile" ? 1 : device === "tablet" ? 2 : 4;
  try {
    const res = await axios.get(
      `${BASE_URL}/products?orderBy=favorite&pageSize=${pageSize}`
    );
    if (!res) throw new Error("베스트상품 api 실패");
    const data: Item[] = res.data.list;
    return data;
  } catch (error) {
    console.error(
      error,
      "베스트 상품을 불러오지 못했습니다. 다시 시도해주세요"
    );
  }
}

export async function getProductInfo({ productId }: Params) {
  try {
    const response = await axios.get(`${BASE_URL}/products/${productId}`);
    if (!response) throw new Error("제품정보 get api 실패");
    const data: ResponseData = response.data;
    return data;
  } catch (error) {
    console.error(error, "제품정보 api 실패");
  }
}

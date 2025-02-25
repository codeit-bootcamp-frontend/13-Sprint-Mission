import axios from "axios";
const BASE_URL = "https://panda-market-api.vercel.app";

export async function getProductComments({ productId }: Params, limit = 3) {
  try {
    const res = await axios.get(
      `${BASE_URL}/products/${productId}/comments?limit=${limit}`
    );
    if (!res) {
      throw new Error("리뷰 불러오기 실패");
    }
    const data: Comment[] = res.data.list;
    return data;
  } catch (error) {
    console.error(error);
  }
}

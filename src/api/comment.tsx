import api from "./index";

export interface Comment {
  id: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  writer: Writer;
}

interface Writer {
  id: number;
  image: string | null;
  nickname: string;
}

export async function getComments(
  productId: string,
  limit: number = 3
): Promise<Comment[]> {
  const response = await api.get(
    `/products/${productId}/comments?limit=${limit}`
  );

  return response.data.list;
}

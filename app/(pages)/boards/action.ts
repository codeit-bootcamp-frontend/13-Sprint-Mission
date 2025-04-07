import { apiClient } from "@/lib/apiClient";

export interface BoardItem {
  updatedAt: string;
  createdAt: string;
  likeCount: number;
  writer: {
    nickname: string;
    id: number;
  };
  image: string;
  content: string;
  title: string;
  id: number;
}

export interface Boards {
  totalCount?: 0;
  list: BoardItem[];
}

interface Params {
  page: number;
  pageSize: number;
  orderBy: string;
  keyword: string;
}

export const INITIAL_BOARDS_VALUE = {
  id: 0,
  title: "",
  content: "",
  image: "",
  likeCount: 0,
  createdAt: "",
  updatedAt: "",
  writer: {
    id: 0,
    nickname: "",
  },
};

export async function getBoards(params: Params) {
  const { page, pageSize, orderBy, keyword } = params;
  const query = new URLSearchParams({
    page: String(page),
    pageSize: String(pageSize),
    orderBy,
    keyword,
  });

  const response = await apiClient.get<Boards>(`/articles?${query}`);

  return response;
}

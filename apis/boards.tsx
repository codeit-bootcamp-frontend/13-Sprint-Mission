import api from "./index";

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

interface Boards {
  totalCount?: 0;
  list: BoardItem[];
}

interface Params {
  page: number;
  pageSize: number;
  orderBy: string;
  keyword: string;
}

export async function getBoards(params: Params): Promise<Boards> {
  const { page, pageSize, orderBy, keyword } = params;
  const response = await api.get("/articles", {
    params: { page, pageSize, orderBy, keyword },
  });

  return response.data;
}

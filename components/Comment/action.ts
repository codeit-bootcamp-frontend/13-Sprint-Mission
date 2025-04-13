import { apiServer } from "@/lib/apiServer";

interface Comment {
  id: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  writer: {
    id: number;
    nickname: string;
    image: string;
  };
}

interface CommentResponse {
  list: Comment[];
}

const COMMENT_LIMIT = 4;

export default async function getComments(articleId: number) {
  const response = await apiServer.get<CommentResponse>(
    `/articles/${articleId}/comments?limit=${COMMENT_LIMIT}`,
  );
  const comments = response.data.list ?? [];

  return comments;
}

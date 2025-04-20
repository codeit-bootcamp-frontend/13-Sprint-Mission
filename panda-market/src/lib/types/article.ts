export interface GetArticlesParams {
  page?: number;
  pageSize?: number;
  orderBy?: string;
  keyword?: string;
}

export interface GetArticlesResponse {
  totalCount: number;
  list: ArticleResponse[];
}

export interface ArticleBody {
  image: string;
  content: string;
  title: string;
}

export interface ArticleResponse {
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

export interface DeleteArticleResponse {
  id: number;
}

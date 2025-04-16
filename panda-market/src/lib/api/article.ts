import { apiClient } from './index';

interface ArticleBody {
  image: string;
  content: string;
  title: string;
}

// article common type
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

interface GetArticlesResponse {
  totalCount: number;
  list: ArticleResponse[];
}

interface DeleteArticleResponse {
  id: number;
}

// fetch All articles
export const getAllArticles = async () => {
  const res = await apiClient.get<GetArticlesResponse>('/articles');
  return res.data;
};

// post article
export const postArticle = async (data: ArticleBody) => {
  const res = await apiClient.post<ArticleResponse>('/articles', data);
  return res.data;
};

// get article by id
export const getArticleById = async (articleId: number) => {
  const res = await apiClient.get<ArticleResponse>(`/articles/${articleId}`);
  return res.data;
};

// patch article by id
export const patchArticleById = async (articleId: number, data: ArticleBody) => {
  const res = await apiClient.patch<ArticleResponse>(`/articles/${articleId}`, data);
  return res.data;
};

// delete article by id
export const deleteArticleById = async (articleId: number) => {
  const res = await apiClient.delete<DeleteArticleResponse>(`/articles/${articleId}`);
  return res.data;
};

// post like in article by id
export const postLikeInArticle = async (articleId: number) => {
  const res = await apiClient.post<ArticleResponse>(`/articles/${articleId}/like`);
  return res.data;
};

// delete like in article by id
export const deleteLikeInArticle = async (articleId: number) => {
  const res = await apiClient.delete<ArticleResponse>(`/articles/${articleId}/like`);
  return res.data;
};

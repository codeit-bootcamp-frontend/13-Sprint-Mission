import {
  ArticleBody,
  ArticleResponse,
  DeleteArticleResponse,
  GetAllArticlesParams,
  GetArticlesResponse,
} from '../types/article';
import { apiClient } from './index';

// get All articles
export const getAllArticles = async ({
  page = 1,
  pageSize = 10,
  orderBy = 'recent',
  keyword,
}: GetAllArticlesParams) => {
  const res = await apiClient.get<GetArticlesResponse>('/articles', {
    params: { page, pageSize, orderBy, keyword },
  });
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

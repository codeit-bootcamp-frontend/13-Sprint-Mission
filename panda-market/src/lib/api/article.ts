import {
  ArticleBody,
  ArticleResponse,
  DeleteArticleResponse,
  GetAllArticlesParams,
  GetArticlesResponse,
} from '../types/article';
import { apiClient } from './index';

// get all articles
export const getAllArticles = async ({
  page = 1,
  pageSize = 10,
  orderBy = 'recent',
  keyword,
}: GetAllArticlesParams = {}): Promise<GetArticlesResponse> => {
  // set query parameter
  const params = new URLSearchParams();
  params.append('page', page.toString());
  params.append('pageSize', pageSize.toString());
  params.append('orderBy', orderBy);
  if (keyword) {
    params.append('keyword', keyword);
  }

  // get baseURL
  const baseURL = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${baseURL}/articles?${params.toString()}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    next: {
      revalidate: 3600,
    },
  });

  if (!res.ok) {
    throw new Error(`HTTP Error : ${res.status}`);
  }

  const data = (await res.json()) as GetArticlesResponse;
  return data;
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

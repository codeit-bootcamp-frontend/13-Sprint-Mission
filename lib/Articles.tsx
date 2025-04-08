import instance from "./api";

export async function getBestArticles({
  page = 1,
  pageSize = 3,
}): Promise<Article[]> {
  try {
    const res = await instance.get(`/articles`, {
      params: { page, pageSize, orderBy: "like" },
    });
    return res.data.list;
  } catch (error) {
    console.log(error);
    throw new Error(`베스트 게시글 불러오기 실패`);
  }
}

export async function getArticles({
  page = 1,
  orderBy = "recent",
  pageSize = 10,
  keyword = "",
}): Promise<Article[]> {
  try {
    const res = await instance.get(`/articles`, {
      params: { page, pageSize, orderBy, keyword },
    });
    return res.data.list;
  } catch (error) {
    console.log(error);
    throw new Error(" 게시글 불러오기 실패");
  }
}

export async function getArticleDetail(articleId: number) {
  const res = await instance.get(`/articles/${articleId}`);
  return res.data;
}

export async function deleteArticle(articleId: number) {
  await instance.delete(`/articles/${articleId}`);
}

interface articleEditedRequestParams {
  articleId: number;
  articleData: ArticleData;
}
export async function editArticle({
  articleId,
  articleData,
}: articleEditedRequestParams) {
  await instance.delete(`/articles/${articleId}`);
}

export async function createArticle(articleData: ArticleData) {
  console.log(articleData);
  const res = await instance.post(`/articles`, { ...articleData });
}

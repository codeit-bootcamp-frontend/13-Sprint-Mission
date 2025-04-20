import SearchInput from '@/components/common/Input/SearchInput';
import BestPostList from '@/app/(main)/boards/_components/BestPostList';
import PostsHeaderWithCreate from '@/app/(main)/boards/_components/PostsHeaderWithCreate';
import { getArticles } from '@/lib/api/article';
import PostList from '@/app/(main)/boards/_components/PostList';
import DropDown from '@/components/common/DropDown';

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function BoardsPage({ searchParams }: { searchParams: SearchParams }) {
  // get articles
  const articles = await getArticles();

  // get best articles
  const bestArticles = await getArticles({
    pageSize: 3,
    orderBy: 'like',
  });

  const { keyword } = await searchParams;

  // get filtered articles with keyword
  const filteredArticles = await getArticles({
    keyword: keyword as string,
  });

  return (
    <div>
      <section className="flex flex-col gap-6">
        <h2 className="text-xl-bold text-gray-900">베스트 게시글</h2>
        <BestPostList posts={bestArticles.list} />
      </section>

      <section className="mt-10 flex flex-col gap-6">
        <PostsHeaderWithCreate />

        <div className="flex items-center justify-between gap-4">
          <SearchInput />
          <DropDown />
        </div>

        <PostList posts={keyword ? filteredArticles.list : articles.list} />
      </section>
    </div>
  );
}

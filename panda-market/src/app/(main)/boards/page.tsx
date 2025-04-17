import SearchInput from '@/components/common/Input/SearchInput';
import BestPostList from '@/app/(main)/boards/_components/BestPostList';
import AllPostList from '@/app/(main)/boards/_components/AllPostList';
import PostsHeaderWithCreate from '@/app/(main)/boards/_components/PostsHeaderWithCreate';
import { getAllArticles } from '@/lib/api/article';

export default async function BoardsPage() {
  // fetch API, revalidate option
  const articles = await getAllArticles();

  return (
    <div>
      <section className="flex flex-col gap-6">
        <h2 className="text-xl-bold text-gray-900">베스트 게시글</h2>
        <BestPostList />
      </section>

      <section className="mt-10 flex flex-col gap-6">
        <PostsHeaderWithCreate />

        <div className="flex items-center justify-between gap-4">
          <SearchInput />
          <div>DropDown</div>
        </div>

        <AllPostList posts={articles.list} />
      </section>
    </div>
  );
}

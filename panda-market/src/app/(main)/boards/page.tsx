import Button from '@/components/common/Button/Button';
import SearchInput from '@/components/common/Input/SearchInput';
import BestBoardsList from './BestBoardList';
import AllBoardList from './AllBoardList';

export default function BoardsPage() {
  return (
    <div>
      <section className="flex flex-col gap-6">
        <h2 className="text-xl font-bold text-gray-900">베스트 게시글</h2>
        <div className="flex gap-6 border">
          <BestBoardsList />
        </div>
      </section>

      <section className="mt-10 flex flex-col gap-6">
        <div className="flex justify-between">
          <h2 className="text-xl font-bold text-gray-900">게시글</h2>
          <Button />
        </div>

        <div className="flex items-center justify-between gap-4">
          <SearchInput />
          <div>DropDown</div>
        </div>

        <AllBoardList />
      </section>
    </div>
  );
}

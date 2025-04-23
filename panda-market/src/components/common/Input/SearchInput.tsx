// server component 유지
export default function SearchInput() {
  return (
    <form className="flex-1" method="GET">
      <input
        placeholder="검색할 상품을 입력해주세요"
        className="w-full rounded-xl bg-gray-100 py-[9px] pr-5 pl-4"
        name="keyword"
      />
    </form>
  );
}

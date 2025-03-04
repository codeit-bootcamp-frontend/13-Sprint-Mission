import Input from "../common/Input/Input";
import search from "@/public/icons/search.svg";
import useSearch from "./useSearch";

export default function Search() {
  const { defaultValue, handleSearchChange } = useSearch();

  return (
    <>
      <Input
        onChange={handleSearchChange}
        leftSlot={search}
        slotSize={24}
        placeholder="검색할 상품을 입력해주세요"
        defaultValue={defaultValue}
      />
    </>
  );
}

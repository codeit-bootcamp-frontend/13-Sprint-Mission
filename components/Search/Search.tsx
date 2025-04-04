import Input from "../common/Input/Input";
import search from "@/public/icons/search.svg";
import useSearch from "./useSearch";
import Image from "next/image";

export default function Search() {
  const { defaultValue, handleSearchChange } = useSearch();

  return (
    <>
      <Input
        onChange={handleSearchChange}
        leftSlot={<Image src={search} alt="search" width={24} height={24} />}
        height={42}
        placeholder="검색할 상품을 입력해주세요"
        defaultValue={defaultValue}
      />
    </>
  );
}

import Input from "../common/Input/Input";
import { useCallback, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import debounce from "lodash.debounce";
import search from "@/public/icons/search.svg";

interface SearchProps {
  onChange: (keyword: string) => void;
}

export default function Search({ onChange }: SearchProps) {
  const searchParams = useSearchParams();

  const debouncedKeyword = useMemo(
    () => debounce((search: string) => onChange(search), 300),
    []
  );

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const search = e.target.value;
      debouncedKeyword(search);
    },
    [debouncedKeyword]
  );
  return (
    <>
      <Input
        onChange={handleSearchChange}
        leftSlot={search}
        slotSize={24}
        placeholder="검색할 상품을 입력해주세요"
        defaultValue={searchParams.get("keyword")?.toString()}
      />
    </>
  );
}

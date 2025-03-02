"use client";

import Input from "../common/Input/Input";
import { useCallback, useMemo } from "react";
import debounce from "lodash.debounce";
import search from "@/public/icons/search.svg";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

interface SearchProps {
  onChange: (keyword: string) => void;
}

export default function Search({ onChange }: SearchProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const updateSearchParams = useCallback(
    (search: string) => {
      const params = new URLSearchParams(searchParams.toString());

      if (search) {
        params.set("keyword", search);
      } else {
        params.delete("keyword");
      }

      replace(`${pathname}?${params.toString()}`, { scroll: false });
      onChange(search);
    },
    [searchParams, replace, pathname, onChange]
  );

  const debouncedKeyword = useMemo(
    () => debounce(updateSearchParams, 300),
    [updateSearchParams]
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

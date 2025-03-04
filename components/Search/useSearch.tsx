import useParams from "@/hooks/useParams";
import debounce from "lodash.debounce";
import { useSearchParams } from "next/navigation";
import { useCallback, useMemo } from "react";

export default function useSearch() {
  const searchParams = useSearchParams();
  const { handleParamsUpdate } = useParams();

  const debouncedKeyword = useMemo(
    () =>
      debounce(
        (search: string) => handleParamsUpdate({ keyword: search }),
        300
      ),
    []
  );

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const search = e.target.value;
      debouncedKeyword(search);
    },
    [debouncedKeyword]
  );

  const defaultValue = searchParams.get("keyword")?.toString();

  return { defaultValue, handleSearchChange };
}

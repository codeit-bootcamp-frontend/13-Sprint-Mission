import { useRouter, useSearchParams } from "next/navigation";

export default function useParams() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const page = Number(searchParams.get("page")) || 1;
  const orderBy = searchParams.get("orderBy") || "recent";
  const keyword = searchParams.get("keyword") || "";

  const handleParamsUpdate = (
    params: Partial<{ page: number; orderBy: string; keyword: string }>
  ) => {
    const newParams = new URLSearchParams(searchParams.toString());

    Object.entries(params).forEach(([key, value]) => {
      if (value) {
        newParams.set(key, String(value));
      } else {
        newParams.delete(key);
      }
    });

    router.replace(`?${newParams.toString()}`, {
      scroll: false,
    });
  };

  return { page, orderBy, keyword, handleParamsUpdate };
}

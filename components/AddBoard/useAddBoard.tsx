import { useState } from "react";
import { useRouter } from "next/navigation";
import DEFAULT_IMAGE from "@/constants/defaultImage";
import { apiClient } from "@/lib/apiClient";
import checkAllFormComplete from "@/utils/checkAllFormComplete";

export interface AddBoardType {
  title: string;
  content: string;
  image: string | null;
}

const INITIAL_ADD_BAORD_VALUE = {
  title: "",
  content: "",
  image: null,
};

export default function useAddBoard() {
  const [formBoard, setFormBoard] = useState<AddBoardType>(
    INITIAL_ADD_BAORD_VALUE,
  );
  const [isPending, setIsPending] = useState(false);

  const router = useRouter();

  const isFormCompelete = checkAllFormComplete({
    title: formBoard.title,
    content: formBoard.content,
  });

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormBoard((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleBoardSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isFormCompelete) return;

    try {
      const response = await apiClient.post<{ id: number }>("/api/articles", {
        title: formBoard.title,
        content: formBoard.content,
        image: formBoard.image || DEFAULT_IMAGE,
      });

      if (response.status === 200) {
        router.push(`/articles/${response.data.id}`);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsPending(false);
    }
  };

  return {
    formBoard,
    isPending,
    isFormCompelete,
    handleFormChange,
    handleBoardSubmit,
  };
}

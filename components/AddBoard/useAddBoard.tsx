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

const INITIAL_ADD_BOARD_VALUE = {
  title: "",
  content: "",
  image: null,
};

export default function useAddBoard() {
  const [formBoard, setFormBoard] = useState<AddBoardType>(
    INITIAL_ADD_BOARD_VALUE,
  );
  const [isPending, setIsPending] = useState(false);

  const router = useRouter();

  const isFormComplete = checkAllFormComplete({
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

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const file = e.target.files[0];

    const formData = new FormData();
    formData.append("image", file);

    try {
      const data = await apiClient.post<{ url: string }>(
        "/images/upload",
        formData,
      );

      setFormBoard((prev) => ({
        ...prev,
        image: data.data.url,
      }));
    } catch (err) {
      console.error(err);
    }
  };

  const handleBoardSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isFormComplete) return;

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
    isFormComplete,
    handleFormChange,
    handleImageChange,
    handleBoardSubmit,
  };
}

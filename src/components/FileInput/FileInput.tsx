import * as S from "./FileInput.styles";
import x from "../../assets/icons/delete.svg";
import plus from "../../assets/icons/plus.svg";
import { useState, useRef, SetStateAction } from "react";
import { AddItem } from "../pages/AddItemPage/AddItemPage";

interface FileProps {
  label: string;
  images: File | null;
  setValues: React.Dispatch<SetStateAction<AddItem>>;
}

export default function FileInput({ label, images, setValues }: FileProps) {
  const [preview, setPreview] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      setValues((prevState) => ({
        ...prevState,
        images: file,
      }));

      const fileUrl = URL.createObjectURL(file);
      setPreview(fileUrl);
    }
  };

  const handleImageDelete = () => {
    if (!inputRef.current) return;
    inputRef.current.value = "";
    setValues((prevState) => ({
      ...prevState,
      images: null,
    }));
    setPreview(null);
  };

  return (
    <>
      <S.FileContainer>
        <S.Label>{label}</S.Label>
        <S.File htmlFor="images">
          <S.Div>
            <S.PlusIcon src={plus} />
            <S.AddImg>이미지 등록</S.AddImg>
          </S.Div>
        </S.File>
        <input
          id="images"
          name="images"
          type="file"
          accept="image/jpeg, image/png"
          style={{ display: "none" }}
          onChange={handleImageChange}
          ref={inputRef}
        />
      </S.FileContainer>
      {images && (
        <S.Preview>
          <S.PreviewImg src={preview ?? undefined} />
          <S.DeleteImg src={x} onClick={handleImageDelete} />
        </S.Preview>
      )}
    </>
  );
}

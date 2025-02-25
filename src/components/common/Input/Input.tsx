import PlusIcon from "../../../assets/icons/plusIcon.svg";
import DeleteIcon from "../../../assets/icons/DeleteIcon.svg";
import SearchIcon from "../../../assets/icons/search.icon.svg";
import * as S from "./Input.style";

import { ChangeEvent, useRef, useState } from "react";
//

interface Props extends S.StyleProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  name: string;
  tag?: boolean;
  value?: string;
  onKeyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  type?: "text" | "number";
}
export function Input({ onChange, type = "text", ...props }: Props) {
  const { label, onKeyUp, ...rest } = props;

  return (
    <S.InputWrapper>
      {!label && <S.Label {...rest}>{label}</S.Label>}
      <S.Input
        type={type}
        onChange={onChange}
        onKeyUp={onKeyUp || undefined}
        {...rest}
      ></S.Input>
    </S.InputWrapper>
  );
}
//
interface ImgProps extends Omit<Props, "onChange"> {
  onChange: (value: File | string) => void;
}
export function ImgInput({ onChange, ...props }: ImgProps) {
  const imgRef = useRef<HTMLInputElement>(null);
  const [imgPreview, setImgPreview] = useState<string>("");

  const handlePreviewImg = () => {
    if (!imgRef.current || !imgRef.current.files?.length) return;
    const file = imgRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      if (typeof reader.result === "string") {
        setImgPreview(reader.result);
        onChange(file);
      }
    };
  };
  //
  const handleClickImgDelete = () => {
    setImgPreview("");
    onChange("");
  };
  return (
    <S.ImgInputWrapper>
      <S.ImgInputContainer>
        <S.ImgInput
          onChange={handlePreviewImg}
          type="file"
          id="fileUpload"
          accept="image/*"
          ref={imgRef}
          {...props}
        />
        <S.PlusLabelContainer htmlFor="fileUpload">
          <S.PlusIcon src={PlusIcon} />
          <p>{props.placeholder}</p>
        </S.PlusLabelContainer>
      </S.ImgInputContainer>
      <div>
        {imgPreview && (
          <S.ImgPreviewWrapper>
            <S.PreviewImg src={imgPreview} />
            <S.DeleteImg src={DeleteIcon} onClick={handleClickImgDelete} />
          </S.ImgPreviewWrapper>
        )}
      </div>
    </S.ImgInputWrapper>
  );
}

export function SearchInput({ onChange, ...props }: Props) {
  return (
    <S.SearchInputWrapper>
      <S.SearchInput onChange={onChange} {...props} />
      <S.SearchIcon src={SearchIcon} />
    </S.SearchInputWrapper>
  );
}

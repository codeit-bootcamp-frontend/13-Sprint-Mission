import PlusIcon from "../../../assets/icons/plusIcon.svg";
import DeleteIcon from "../../../assets/icons/DeleteIcon.svg";
import * as S from "./Input.style";
import { useRef, useState } from "react";
//
export function Input({ label, placeholder, name, onChange, ...props }) {
  const { tag, onKeyUp, value, type, textArea, ...rest } = props;
  const handleChange = (e) => {
    onChange(e.target);
  };
  const handleOnKeyUp = (e) => {
    onKeyUp(e);
  };
  const handleChangeTag = (e) => {
    onChange(e.target.value);
  };
  return (
    <S.InputWrapper>
      <S.Label>{label}</S.Label>
      <S.Input
        type={type ? type : "text"}
        value={value}
        name={name}
        $textArea={textArea}
        placeholder={placeholder}
        onChange={tag ? handleChangeTag : handleChange}
        onKeyUp={tag ? handleOnKeyUp : undefined}
        {...rest}
      ></S.Input>
    </S.InputWrapper>
  );
}
//
export function ImgInput({ placeholder, type, name, onChange, ...props }) {
  const { ...rest } = props;
  const imgRef = useRef();
  const [imgPreview, setImgPreview] = useState("");

  const handlePreviewImg = () => {
    const file = imgRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImgPreview(reader.result);
      onChange({ name: "img", value: file }); //백엔드에서 img를 file 객체안받을시 수정 필요
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
          type={type}
          name={name}
          id="fileUpload"
          accept="image/*"
          ref={imgRef}
          {...rest}
        />
        <S.PlusLabelContainer htmlFor="fileUpload">
          <S.PlusIcon src={PlusIcon} />
          <p>{placeholder}</p>
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

import PlusIcon from "../../../assets/icons/plusIcon.svg";
import DeleteIcon from "../../../assets/icons/DeleteIcon.svg";
import * as S from "./Input.style";
import { useRef, useState } from "react";
//
export function Input({ onChange, ...props }) {
  const { label, tag, onKeyUp, ...rest } = props;

  return (
    <S.InputWrapper>
      {!label && <S.Label {...props}>{label}</S.Label>}
      <S.Input
        onChange={onChange}
        onKeyUp={onKeyUp && onKeyUp}
        {...rest}
      ></S.Input>
    </S.InputWrapper>
  );
}
//
export function ImgInput({ onChange, ...props }) {
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

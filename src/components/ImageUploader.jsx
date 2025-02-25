// ImageUploader.jsx
import * as S from "./ImageUploader.styles";
import upload_de from "../assets/images/icons/upload_de.svg";
import ic_X from "../assets/images/icons/ic_X.svg";
import { useState } from "react";

export default function ImageUploader() {
  const [previewImage, setPreviewimage] = useState(null);
  const [showLimitText, setShowLimitText] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreviewimage(imageUrl);
      setShowLimitText(false); // 새로 업로드 성공했으니 문구 지우기
    }
  };

  const handleRemoveImage = () => {
    setPreviewimage(null);
    setShowLimitText(false); // 이미지 삭제했으니 문구 지우기
  };

  const handleUploadClick = (e) => {
    if (previewImage) {
      e.preventDefault();
      setShowLimitText(true); // 문구 보여주기
    }
  };

  const isImageUploaded = !!previewImage;

  return (
    <S.UploadContainer>
      {/* 업로드 버튼 */}
      <div>
        <S.UploadLabel htmlFor="imageUpload">
          <S.ImageUploadIcon src={upload_de} alt="이미지 업로드 아이콘" />
        </S.UploadLabel>
        <S.HiddenInput
          id="imageUpload"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          onClick={handleUploadClick}
        />
        {showLimitText && (
          <S.LimitText>*이미지 등록은 최대 1장까지 가능합니다.</S.LimitText>
        )}
      </div>

      {/* 이미지 미리보기 */}
      {isImageUploaded && (
        <div>
          <S.PreviewWrapper>
            <S.ImageContainer>
              <S.PreviewImage src={previewImage} alt="상품 이미지 미리보기" />
              <S.RemoveButton onClick={handleRemoveImage}>
                <S.CloseIcon src={ic_X} alt="삭제" />
              </S.RemoveButton>
            </S.ImageContainer>
          </S.PreviewWrapper>
        </div>
      )}
    </S.UploadContainer>
  );
}

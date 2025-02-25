// AddItemPage.jsx
import * as S from "./AddItemPage.styles";
import { useState, useEffect } from "react";
import Input from "../../components/common/Input";
import ImageUploader from "../../components/ImageUploader";
import TagInput from "../../components/TagInput";

export default function AddItemPage() {
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [tags, setTags] = useState([]);
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsFormValid(
      productName.trim() !== "" &&
        description.trim() !== "" &&
        Number(price) > 0 &&
        tags.length > 0
    );
  }, [productName, description, price, tags]);

  return (
    <div style={{ overflowY: "auto" }}>
      <S.Container>
        <S.AddHeader>
          <S.Title>상품 등록하기</S.Title>
          <S.SubmitBtn
            type="submit"
            disabled={!isFormValid}
            $isActive={isFormValid}
          >
            등록
          </S.SubmitBtn>
        </S.AddHeader>

        <S.Wrapper>
          <S.SubTitle>상품 이미지</S.SubTitle>
          <ImageUploader />
        </S.Wrapper>

        <S.SubTitle>상품명</S.SubTitle>
        <Input
          placeholder={"상품명을 입력해주세요"}
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />

        <S.SubTitle>상품 소개</S.SubTitle>
        <Input
          placeholder="상품 소개를 입력해주세요"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{ height: "282px", overflowY: "auto" }}
        />

        <S.SubTitle>판매가격</S.SubTitle>
        <Input
          placeholder={"판매 가격을 입력해주세요"}
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <S.SubTitle>태그</S.SubTitle>
        <TagInput onChange={setTags} />
      </S.Container>
    </div>
  );
}

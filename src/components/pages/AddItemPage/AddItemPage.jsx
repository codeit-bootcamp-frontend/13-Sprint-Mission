import * as S from "./AddItemPage.styles";
import Input from "../../common/Input/Input";
import FileInput from "../../FileInput/FileInput";
import Tag from "../../Tag/Tag";
import { useState } from "react";

const INITIAL_VALUE = {
  images: null,
  productName: "",
  description: "",
  price: 0,
  tag: [],
};

export default function AddItemPage() {
  const [values, setValues] = useState(INITIAL_VALUE);
  const [tag, setTag] = useState("");

  const handleTagChange = (e) => {
    if (e.key === "Enter" && tag.trim() !== "") {
      setValues((prevState) => ({
        ...prevState,
        tag: [...prevState.tag, tag],
      }));
      setTag("");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const INPUT = [
    {
      label: "상품명",
      name: "productName",
      type: "text",
      placeholder: "상품명을 입력해주세요",
      value: values.productName,
      onChange: handleInputChange,
    },
    {
      label: "상품 소개",
      name: "description",
      type: "text",
      placeholder: "상품 소개를 입력해주세요",
      style: { height: "282px" },
      value: values.description,
      isTextarea: true,
      onChange: handleInputChange,
    },
    {
      label: "판매가격",
      name: "price",
      type: "number",
      placeholder: "판매 가격을 입력해주세요",
      value: values.price ? values.price : "",
      onChange: handleInputChange,
    },
    {
      label: "태그",
      name: "tag",
      type: "text",
      placeholder: "태그를 입력해주세요",
      value: tag,
      onChange: (e) => setTag(e.target.value),
      onKeyDown: handleTagChange,
    },
  ];

  return (
    <S.AddItemContainer>
      <S.AddItem>
        <S.AddItemHeader>
          <S.Add>상품 등록하기</S.Add>
          <S.AddBtn>등록</S.AddBtn>
        </S.AddItemHeader>
        <S.InputContainer>
          <S.AddImg>
            <FileInput lable="상품 이미지" images={values.images} setValues={setValues} />
          </S.AddImg>
          {INPUT.map((i, idx) => (
            <Input
              key={idx}
              label={i.label}
              name={i.name}
              type={i.type}
              placeholder={i.placeholder}
              value={i.value}
              style={i.style}
              isTextarea={i.isTextarea}
              onChange={i.onChange}
              onKeyDown={i.onKeyDown}
            />
          ))}
        </S.InputContainer>
        <S.TagList>
          {values.tag.map((t, idx) => (
            <Tag key={idx} tag={t} />
          ))}
        </S.TagList>
      </S.AddItem>
    </S.AddItemContainer>
  );
}

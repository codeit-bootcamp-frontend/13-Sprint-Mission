import * as S from "./AddItemPage.styles";
import Input from "../../common/Input/Input";
import FileInput from "../../FileInput/FileInput";
import x from "../../../assets/icons/delete.svg";
import Tag from "../../Tag/Tag";

export default function AddItemPage() {
  const INPUT = [
    {
      label: "상품명",
      name: "name",
      type: "text",
      placeholder: "상품명을 입력해주세요",
      value: "",
      isTextarea: false,
    },
    {
      label: "상품 소개",
      name: "description",
      type: "text",
      placeholder: "상품 소개를 입력해주세요",
      style: { height: "282px" },
      value: "",
      isTextarea: true,
    },
    {
      label: "판매가격",
      name: "price",
      type: "number",
      placeholder: "판매 가격을 입력해주세요",
      value: "",
      isTextarea: false,
    },
    {
      label: "태그",
      name: "tag",
      type: "text",
      placeholder: "태그를 입력해주세요",
      value: "",
      isTextarea: false,
    },
  ];

  const tag = ["티셔츠", "상의"];

  return (
    <S.AddItemContainer>
      <S.AddItem>
        <S.AddItemHeader>
          <S.Add>상품 등록하기</S.Add>
          <S.AddBtn>등록</S.AddBtn>
        </S.AddItemHeader>
        <S.InputContainer>
          <S.AddImg>
            <FileInput lable="상품 이미지" name="file" onChange={() => console.log("")} />
            <S.Preview>
              <S.PreviewImg />
              <S.DeleteImg src={x} />
            </S.Preview>
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
              onChange={() => console.log("")}
            />
          ))}
        </S.InputContainer>
        <S.TagList>
          {tag.map((t, idx) => (
            <Tag key={idx} tag={t} />
          ))}
        </S.TagList>
      </S.AddItem>
    </S.AddItemContainer>
  );
}

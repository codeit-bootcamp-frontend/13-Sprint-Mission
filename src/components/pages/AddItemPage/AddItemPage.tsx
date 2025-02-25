import * as S from "./AddItemPage.styles";
import Input from "../../common/Input/Input";
import FileInput from "../../FileInput/FileInput";
import Tag from "../../Tag/Tag";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { isValidAddItem } from "../../../utils/addValidate";

export interface AddItem {
  images: string | null;
  name: string;
  description: string;
  price: number;
  tags: string[];
}

const INITIAL_VALUE = {
  images: null,
  name: "",
  description: "",
  price: 0,
  tags: [],
};

export default function AddItemPage() {
  const navigate = useNavigate();
  const [values, setValues] = useState<AddItem>(INITIAL_VALUE);
  const [tag, setTag] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleTagChange = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // IME composition
    if (e.nativeEvent.isComposing) return;

    const equalTag = values.tags.some((existing) => existing === tag);
    const enterEvent = e.key === "Enter";

    if (!equalTag) {
      if (enterEvent && tag.trim() !== "") {
        setValues((prevState) => ({
          ...prevState,
          tags: [...prevState.tags, tag],
        }));
        setTag("");
      }
    } else if (enterEvent) {
      e.preventDefault();
      alert("이미 존재하는 태그입니다!");
    }
  };

  const handleTagDelete = (deleteTag: string) => {
    setValues((prevState) => ({
      ...prevState,
      tags: prevState.tags.filter((tag) => tag !== deleteTag),
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (isValidAddItem(values)) {
      e.preventDefault();
      // const formData = new FormData();
      // formData.append("images", values.images);
      // formData.append("name", values.name);
      // formData.append("description", values.description);
      // formData.append("price", values.price);
      // formData.append("tags", values.tags);
      navigate("/items");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLFormElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  const INPUT = [
    {
      label: "상품명",
      name: "name",
      type: "text",
      placeholder: "상품명을 입력해주세요",
      value: values.name,
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
      name: "tags",
      type: "text",
      placeholder: "태그를 입력해주세요",
      value: tag,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setTag(e.target.value),
      onKeyDown: handleTagChange,
    },
  ];

  return (
    <S.AddItemContainer>
      <S.AddItem onSubmit={handleSubmit} onKeyDown={handleKeyDown}>
        <S.AddItemHeader>
          <S.Add>상품 등록하기</S.Add>
          <S.AddBtn type="submit" disabled={!isValidAddItem(values)}>
            등록
          </S.AddBtn>
        </S.AddItemHeader>
        <S.InputContainer>
          <S.AddImg>
            <FileInput
              label="상품 이미지"
              images={values.images}
              setValues={setValues}
            />
          </S.AddImg>
          {INPUT.map((i) => (
            <Input
              key={i.name}
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
          {values.tags.map((t) => (
            <Tag key={t} tag={t} onClick={() => handleTagDelete(t)} />
          ))}
        </S.TagList>
      </S.AddItem>
    </S.AddItemContainer>
  );
}

import Button from "../../components/common/Button/Button";
import { placeholder, button } from "../../constants/globalConstant";
import * as I from "../../components/common/Input/Input";
import * as S from "./AddItem.style";
import Tag from "../../components/Tag/Tag";
import { ChangeEvent, useState } from "react";
//
type ProductForm = Omit<Product, "images"> & { images: string | File };

const INITIAL_DATA: ProductForm = {
  images: "",
  name: "",
  description: "",
  price: 0,
  tags: [],
};
const REQUIRED_INPUT = ["name", "content", "tags", "price"];
//
function AddItem() {
  const [tag, setTag] = useState<string>("");
  const [formData, setFormData] = useState(INITIAL_DATA);
  //
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    //ToDo: img 프로퍼티에는 imgInput에서 넘겨준 file 객체가 담기고 있음
  };

  const handleImgChange = (value: File | string) => {
    setFormData({ ...formData, images: value });
  };

  const CreateTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    console.log("createTag 함수 들어옴");
    if (e.key === "Enter" && tag.trim() !== "") {
      const notDuplicate = formData.tags.includes(tag.trim());
      if (!notDuplicate) {
        setFormData((prev) => ({
          ...prev,
          tags: [...prev.tags, tag.trim()],
        }));
      }
      setTag("");
      (e.target as HTMLInputElement).value = "";
    }
  };

  const handleClickTagDelete = (tag: string) => {
    const filterTags = formData.tags.filter((prev: string) => prev !== tag);
    setFormData((prev) => ({ ...prev, tags: filterTags }));
  };

  const isInputValid = REQUIRED_INPUT.every((field) => {
    const value = formData[field]; //전역 타입 파일에 주석 단부분에서 인덱스 시그니쳐를 지우면 이부분이 오류가 납니다 ㅠㅠ
    switch (typeof value) {
      case "object":
        if (Array.isArray(value) && value.length === 0) {
          return false;
        }
        return true;
      case "string":
        return value.trim() !== "";

      case "number":
        return value > 0;
      default:
        return false;
    }
  });

  const handleClickSubmit = () => {};
  return (
    <S.Background>
      <S.Container>
        <S.FlexDiv>
          <S.Title>상품 등록하기</S.Title>
          <S.ButtonContainer>
            <Button onClick={handleClickSubmit} disabled={!isInputValid}>
              {button.send}
            </Button>
          </S.ButtonContainer>
        </S.FlexDiv>
        <S.InputsContainer>
          <I.ImgInput
            name="img"
            placeholder={placeholder.img}
            onChange={handleImgChange}
          />
          <I.Input
            label="상품명"
            placeholder={placeholder.productName}
            name="name"
            onChange={handleChange}
          />
          <I.Input
            $textArea
            label="상품 소개"
            placeholder={placeholder.content}
            name="content"
            onChange={handleChange}
          />
          <I.Input
            label="판매가격"
            type="number"
            placeholder={placeholder.price}
            name="price"
            onChange={handleChange}
          />
          <S.TagInputContainer>
            <I.Input
              tag
              label="태그"
              placeholder={placeholder.tag}
              name="tags"
              value={tag}
              onKeyUp={CreateTag}
              onChange={(e) => setTag(e.target.value)}
            />
            <Tag tags={formData.tags} onClick={handleClickTagDelete} />
          </S.TagInputContainer>
        </S.InputsContainer>
      </S.Container>
    </S.Background>
  );
}
export default AddItem;

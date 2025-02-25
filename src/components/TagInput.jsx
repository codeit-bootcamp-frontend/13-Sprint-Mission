// TagInput.jsx
import * as S from "./TagInput.styles";
import ic_x from "../assets/images/icons/ic_X.svg";
import { useState } from "react";

export default function TagInput({ onChange }) {
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim().length > 1) {
      e.preventDefault();

      if (!tags.includes(inputValue.trim())) {
        const updatedTags = [...tags, inputValue.trim()];
        setTags(updatedTags);
        onChange(updatedTags);
      }
      setTimeout(() => setInputValue(""), 0); // 입력 후 초기화 + 엔터 눌렀을 때 새로고침 방지 비동기처리
    }
  };

  const handleDeleteTag = (tagToDelete) => {
    const updatedTags = tags.filter((tag) => tag !== tagToDelete);
    setTags(updatedTags);
    onChange(updatedTags);
  };

  return (
    <S.TagWrapper>
      <S.StyledInput
        type="text"
        placeholder="태그를 입력해주세요"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <S.TagList>
        {tags.map((tag) => (
          <S.TagItem key={tag}>
            {tag}
            <S.DeleteButton onClick={() => handleDeleteTag(tag)}>
              <img src={ic_x} alt="삭제" />
            </S.DeleteButton>
          </S.TagItem>
        ))}
      </S.TagList>
    </S.TagWrapper>
  );
}

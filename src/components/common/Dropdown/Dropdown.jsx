import * as S from "./Dropdown.styles";
import { useState } from "react";

export default function Dropdown({ sortOption = "최신순", onChange, list = [] }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <S.DropdownContainer>
      <S.Present onClick={handleOpenClick}>
        <S.PresentValue>{sortOption}</S.PresentValue>
        <S.Arrow $isOpen={isOpen} />
      </S.Present>
      {isOpen && (
        <S.List>
          {list.map((item, idx) => (
            <S.ListItem
              key={idx}
              onClick={() => {
                onChange(item);
                setIsOpen(false);
              }}
            >
              {item}
            </S.ListItem>
          ))}
        </S.List>
      )}
    </S.DropdownContainer>
  );
}

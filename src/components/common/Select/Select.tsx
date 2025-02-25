import React, { useState } from "react";
import * as S from "./Select.style";
import selectIcon from "../../../assets/icons/select.icon.svg";
import kebabIcon from "../../../assets/icons/kebab.icon.svg";
import sortIcon from "../../../assets/icons/sort.icon.svg";
import { useAutoClose } from "../../../hooks/useAutoClose";
import { button } from "../../../constants/globalConstant";
import useWindowSize from "../../../hooks/useWindowSize";
//
interface Props {
  onChange: (option: string) => void;
}

export function SortSelect({ onChange, ...props }: Props) {
  const device = useWindowSize();
  const options = ["최신순", "좋아요순"];

  const [selected, setSelected] = useState<string>("최신순");
  const { ref, isOpen, setIsOpen } = useAutoClose(false); //TODO

  const handleOptionClick = (option: string) => {
    setSelected(option);
    setIsOpen(false);
    onChange(option);
  };

  return (
    <>
      <S.DropDown ref={ref} {...props}>
        {device === "mobile" ? (
          <S.SortImgWrapper onClick={() => setIsOpen(!isOpen)}>
            <S.SortImg src={sortIcon} alt="정렬" />
          </S.SortImgWrapper>
        ) : (
          <S.Selected onClick={() => setIsOpen(!isOpen)}>
            {selected}
            <img src={selectIcon} alt="정렬" />
          </S.Selected>
        )}

        <S.Options $isOpen={isOpen}>
          {options.map((option) => (
            <S.OptionList
              key={option}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </S.OptionList>
          ))}
        </S.Options>
      </S.DropDown>
    </>
  );
}

export function EditSelect({ onChange, ...props }: Props) {
  const options = [button.edit, button.delete];
  const { ref, isOpen, setIsOpen } = useAutoClose(false);

  const handleOptionClick = (option: string) => {
    setIsOpen(false);
    onChange(option);
  };

  return (
    <>
      <S.EditDropDown ref={ref}>
        <S.KebobButton onClick={() => setIsOpen(!isOpen)} {...props}>
          <img src={kebabIcon} alt="케밥" />
        </S.KebobButton>
        <S.Options $isOpen={isOpen}>
          {options.map((option) => (
            <S.OptionList
              key={option}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </S.OptionList>
          ))}
        </S.Options>
      </S.EditDropDown>
    </>
  );
}

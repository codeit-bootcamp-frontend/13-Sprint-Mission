import React, { useState } from "react";
import * as S from "./Select.style";
import selectIcon from "../../../assets/icons/select.icon.svg";
import kebabIcon from "../../../assets/icons/kebab.icon.svg";

import { useAutoClose } from "../../../hooks/useAutoClose";
import { button } from "../../../constants/globalConstant";
//

export function SortSelect({ onChange, ...props }) {
  const options = ["최신순", "좋아요순"];

  const [selected, setSelected] = useState(options[0] | "options배열 필요");
  const { ref, isOpen, setIsOpen } = useAutoClose(false);

  const handleOptionClick = (option) => {
    setSelected(option);
    setIsOpen(false);
    onChange(option);
  };

  return (
    <>
      <S.DropDown ref={ref}>
        <S.Selected $isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
          {selected}
          <img src={selectIcon} />
        </S.Selected>
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

export function EditSelect({ onChange, ...props }) {
  const options = [button.edit, button.delete];
  const { ref, isOpen, setIsOpen } = useAutoClose(false);

  const handleOptionClick = (option) => {
    setIsOpen(false);
    onChange(option);
  };

  return (
    <>
      <S.EditDropDown ref={ref}>
        <S.KebobButton $isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
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

// EditDropdown.jsx
import { useState } from "react";
import styled from "styled-components";
import theme from "../../styles/theme";
import ic_kebab from "../../assets/images/icons/ic_kebab.svg";

export default function EditDropdown({ sortOption, setSortOption }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownWrapper>
      <DropdownButton onClick={() => setIsOpen(!isOpen)}>
        <img src={ic_kebab} alt="" />
      </DropdownButton>

      {isOpen && (
        <DropdownListWrapper>
          <DropdownItem>수정하기</DropdownItem>
          <DropdownItem>삭제하기</DropdownItem>
        </DropdownListWrapper>
      )}
    </DropdownWrapper>
  );
}

const DropdownWrapper = styled.div`
  position: relative;
`;

const DropdownButton = styled.button``;

const DropdownListWrapper = styled.div`
  position: absolute;
  top: 30px;
  right: 0;
  background: white;
  border-radius: 12px;
  border: 1px solid ${theme.colors.Gray200};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  width: 130px;
  z-index: 10;
`;

const DropdownItem = styled.div`
  padding: 12px 16px;
  font: ${theme.fonts.H5Regular};
  cursor: pointer;
  text-align: center;

  &:hover {
    background-color: ${theme.colors.Gray100};
  }
`;

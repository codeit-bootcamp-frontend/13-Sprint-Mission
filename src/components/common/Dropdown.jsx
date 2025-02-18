// Dropdown.jsx
import { useState } from "react";
import styled from "styled-components";
import theme from "../../styles/theme";

export default function Dropdown({ sortOption, setSortOption }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    setSortOption(option);
    setIsOpen(false);
  };

  return (
    <DropdownWrapper>
      <DropdownButton onClick={() => setIsOpen(!isOpen)}>
        {sortOption === "recent" ? "최신순" : "좋아요순"}
        <Arrow>▼</Arrow>
      </DropdownButton>

      {isOpen && (
        <DropdownListWrapper>
          <DropdownItem onClick={() => handleSelect("recent")}>
            최신순
          </DropdownItem>
          <DropdownItem onClick={() => handleSelect("favorite")}>
            좋아요순
          </DropdownItem>
        </DropdownListWrapper>
      )}
    </DropdownWrapper>
  );
}

const DropdownWrapper = styled.div`
  position: relative;
`;

const DropdownButton = styled.button`
  background-color: white;
  border: 1px solid ${theme.colors.Gray200};
  border-radius: 12px;
  padding: 12px 20px;
  font: ${theme.fonts.H5Regular};
  cursor: pointer;
  width: 130px;
  height: 42px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Arrow = styled.span`
  font-size: 12px;
`;

const DropdownListWrapper = styled.div`
  position: absolute;
  top: 48px;
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

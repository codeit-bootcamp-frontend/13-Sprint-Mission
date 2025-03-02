import * as S from "./Dropdown.styles";
import Image from "next/image";
import { useState } from "react";
import down from "@/public/icons/arrowDown.svg";
import up from "@/public/icons/arrowUp.svg";
import dropdown from "@/public/icons/dropdown.svg";

interface DropDownProps {
  orderBy: string;
  onChange: (filter: string) => void;
  list: string[];
}

export default function Dropdown({
  orderBy,
  onChange,
  list = [],
}: DropDownProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpenClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <S.DropdownContainer>
      <S.Present onClick={handleOpenClick}>
        <S.PresentValue>{orderBy}</S.PresentValue>
        <Image src={isOpen ? up : down} width={24} height={24} alt="arrow" />
      </S.Present>
      <S.Small onClick={handleOpenClick}>
        <Image src={dropdown} width={24} height={24} alt="dropdown" />
      </S.Small>
      {isOpen && (
        <S.List>
          {list.map((item) => (
            <S.ListItem
              key={item}
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

import * as S from "./Header.styles";
import logo from "@/public/icons/panda.svg";
import user from "@/public/icons/user.svg";
import Image from "next/image";

export default function Header() {
  const Links = [
    {
      link: "/boards",
      name: "자유게시판",
    },
    {
      link: "/items",
      name: "중고마켓",
    },
  ];

  return (
    <S.HeaderContainer>
      <S.Links>
        <S.LogoContainer href="/">
          <Image src={logo} width={40} height={40} alt="logo" priority />
          <S.Name>판다마켓</S.Name>
        </S.LogoContainer>
        <S.LinkList>
          {Links.map((l) => (
            <S.NavItems key={l.name}>
              <S.Nav href={l.link}>{l.name}</S.Nav>
            </S.NavItems>
          ))}
        </S.LinkList>
      </S.Links>
      <Image src={user} width={40} height={40} alt="user" />
    </S.HeaderContainer>
  );
}

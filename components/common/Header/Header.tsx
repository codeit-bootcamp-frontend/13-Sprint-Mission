"use client";

import * as S from "./Header.styles";
import logo from "@/public/icons/panda.svg";
import user from "@/public/icons/user.svg";
import theme from "@/styles/theme";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const isBoards = pathname.startsWith("/boards");
  const isItems = pathname.startsWith("/items");

  const Links = [
    {
      link: "/boards",
      style: {
        color: isBoards ? `${theme.color.blue}` : `${theme.color.gray600}`,
      },
      name: "자유게시판",
    },
    {
      link: "/items",
      style: {
        color: isItems ? `${theme.color.blue}` : `${theme.color.gray600}`,
      },
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
              <Link href={l.link}>
                <span style={l.style}>{l.name}</span>
              </Link>
            </S.NavItems>
          ))}
        </S.LinkList>
      </S.Links>
      <Image src={user} width={40} height={40} alt="user" />
    </S.HeaderContainer>
  );
}

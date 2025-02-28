"use client";

import * as S from "./BestItem.styles";
import Image from "next/image";
import best from "@/public/icons/best.svg";
import heart from "@/public/icons/emptyHeart.svg";

// interface BestItemProps {
//   updatedAt: string;
//   createdAt: string;
//   likeCount: number;
//   writer: string;
//   image: string;
//   content: string;
// }

export default function BestItem() {
  const date = new Date(best.createdAt);
  const formattedDate = `${date.getFullYear()}.${String(
    date.getMonth() + 1
  ).padStart(2, "0")}.${String(date.getDate()).padStart(2, "0")}`;

  return (
    <S.Container>
      <S.Item>
        <S.BestTitle>
          <Image src={best} width={16} height={16} alt="" />
          <S.Best>Best</S.Best>
        </S.BestTitle>
        <S.Content>
          <S.ContentText>{best.content}</S.ContentText>
          <S.Image>
            <Image fill src={best.image} alt="" />
          </S.Image>
        </S.Content>
        <S.Footer>
          <S.UserWrapper>
            <S.User>{best.writer}</S.User>
            <S.Like>
              <Image src={heart} width={16} height={16} alt="like" />
              <S.LikeCount>{best.likeCount}</S.LikeCount>
            </S.Like>
          </S.UserWrapper>
          <S.Date>{formattedDate}</S.Date>
        </S.Footer>
      </S.Item>
    </S.Container>
  );
}

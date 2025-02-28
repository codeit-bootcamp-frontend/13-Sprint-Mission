"use client";

import * as S from "./BestItem.styles";
import Image from "next/image";
import medal from "@/public/icons/best.svg";
import heart from "@/public/icons/emptyHeart.svg";
import { BoardItem } from "@/apis/boards";

interface BoardProps {
  best: BoardItem;
}

export default function BestItem({ best }: BoardProps) {
  const date = new Date(best.createdAt);
  const formattedDate = `${date.getFullYear()}.${String(
    date.getMonth() + 1
  ).padStart(2, "0")}.${String(date.getDate()).padStart(2, "0")}`;

  return (
    <S.Container>
      <S.Item>
        <S.BestTitle>
          <Image src={medal} width={16} height={16} alt="medal" />
          <S.Best>Best</S.Best>
        </S.BestTitle>
        <S.Content>
          <S.ContentText>{best.content}</S.ContentText>
          <S.Image>
            <Image fill src={best.image} alt="image" />
          </S.Image>
        </S.Content>
        <S.Footer>
          <S.UserWrapper>
            <S.User>{best.writer.nickname}</S.User>
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

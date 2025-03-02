import * as S from "./AllItem.styles";
import Image from "next/image";
import user from "@/public/icons/user.svg";
import heart from "@/public/icons/emptyHeart.svg";
import formattedDate from "@/utils/formattedDate";
import { BoardItem } from "@/apis/boards";

interface AllItemProps {
  all: BoardItem;
}

export default function AllItem({ all }: AllItemProps) {
  return (
    <S.Container href="/">
      <S.Content>
        <S.ContentText>{all.content}</S.ContentText>
        <S.Image>{all.image && <Image fill src={all.image} alt="" />}</S.Image>
      </S.Content>
      <S.Footer>
        <S.UserWrapper>
          <Image src={user} width={24} height={24} alt="user" />
          <S.User>{all.writer.nickname}</S.User>
          <S.Date>{formattedDate(all.createdAt)}</S.Date>
        </S.UserWrapper>
        <S.Like>
          <Image src={heart} width={16} height={16} alt="like" />
          <S.LikeCount>{all.likeCount}</S.LikeCount>
        </S.Like>
      </S.Footer>
    </S.Container>
  );
}

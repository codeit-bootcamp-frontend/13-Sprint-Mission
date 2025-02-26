import * as S from "./User.styles";
import user from "../../assets/icons/user.svg";

interface UserProps {
  owner: string;
  createdAt: string;
  detail: boolean;
}

export default function User({ owner, createdAt, detail }: UserProps) {
  const date = new Date(createdAt);
  const formattedDate = `${date.getFullYear()}.${String(
    date.getMonth() + 1
  ).padStart(2, "0")}.${String(date.getDate()).padStart(2, "0")}`;

  return (
    <S.User $detail={detail}>
      <S.Profile src={user} $detail={detail} alt="profile" />
      <S.UserInfo>
        <S.Name $detail={detail}>{owner}</S.Name>
        <S.CreatedAt $detail={detail}>{formattedDate}</S.CreatedAt>
      </S.UserInfo>
    </S.User>
  );
}

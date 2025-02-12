import * as S from "./User.styles";

export default function User({ images, owner, createdAt, detail }) {
  const date = new Date(createdAt);
  const formattedDate = `${date.getFullYear()}.${String(
    date.getMonth() + 1
  ).padStart(2, "0")}.${String(date.getDate()).padStart(2, "0")}`;

  return (
    <S.User $detail={detail}>
      <S.Profile src={images} $detail={detail} alt="profile" />
      <S.UserInfo>
        <S.Name $detail={detail}>{owner}</S.Name>
        <S.CreatedAt $detail={detail}>{formattedDate}</S.CreatedAt>
      </S.UserInfo>
    </S.User>
  );
}

import * as S from "./ProductPage.styles";
import Detail from "../../Detail/Detail";
import Comment from "../../Comment/Comment";
import goBack from "../../../assets/icons/goBack.svg";
import { useNavigate } from "react-router-dom";

export default function ProductPage() {
  const navigate = useNavigate();

  return (
    <S.Product>
      <S.Container>
        <Detail />
        <Comment />
      </S.Container>
      <S.GoBackToList onClick={() => navigate("/items")}>
        목록으로 돌아가기
        <img src={goBack} alt="" />
      </S.GoBackToList>
    </S.Product>
  );
}

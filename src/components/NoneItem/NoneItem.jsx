import * as S from "./NoneItem.styles";

export default function NoneItem({ list }) {
  return (
    <S.NoneItemContainer>
      <S.Text>검색한 상품이 없습니다</S.Text>
    </S.NoneItemContainer>
  );
}

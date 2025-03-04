import * as S from "./Best.styles";
import BestItem from "./BestItem";
import useBestData from "./useBestData";

export default function Best() {
  const best = useBestData();

  return (
    <S.BestContainer>
      <h2>베스트 게시글</h2>
      <S.Items>
        {best.map((item) => (
          <BestItem key={item.id} best={item} />
        ))}
      </S.Items>
    </S.BestContainer>
  );
}

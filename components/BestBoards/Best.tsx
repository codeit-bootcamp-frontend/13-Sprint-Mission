import { BoardItem } from "@/apis/boards";
import * as S from "./Best.styles";
import BestItem from "./BestItem";

export default function Best({ best }: { best: BoardItem[] }) {
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

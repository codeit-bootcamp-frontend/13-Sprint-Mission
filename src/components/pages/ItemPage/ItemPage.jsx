import * as S from "./ItemPage.styles";
import BestItems from "../../Items/BestItems/BestItems";
import AllItems from "../../Items/AllItems/AllItems";

export default function ItemPage() {
  return (
    <S.Container>
      <BestItems />
      <AllItems />
    </S.Container>
  );
}

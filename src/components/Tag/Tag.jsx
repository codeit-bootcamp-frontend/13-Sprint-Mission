import DeleteButton from "../../assets/icons/DeleteIcon.svg";
import * as S from "./Tag.style";
export default function Tag({ tags, ...props }) {
  const { onClick, ...rest } = props;
  //...rest : $product(gap8px,items/id페이지)
  return (
    <S.TagsContainer {...rest}>
      {tags?.length > 0 &&
        tags.map((tag) => {
          return (
            <S.Container key={tag}>
              <S.FlexContents>
                <S.Tag>#{tag}</S.Tag>
                {!rest.$product && (
                  <S.DeleteButton
                    tag={tag}
                    onClick={() => onClick(tag)}
                    src={DeleteButton}
                  />
                )}
              </S.FlexContents>
            </S.Container>
          );
        })}
    </S.TagsContainer>
  );
}

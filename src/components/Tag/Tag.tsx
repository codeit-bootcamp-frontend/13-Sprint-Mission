import DeleteButton from "../../assets/icons/DeleteIcon.svg";
import * as S from "./Tag.style";
//
interface Props extends S.StyledProps {
  tags: Tag[];
  onClick?: (tag: Tag) => void;
}
export default function Tag({ tags, ...props }: Props) {
  const { onClick, ...rest } = props;
  return (
    <S.TagsContainer>
      {tags?.length > 0 &&
        tags.map((tag) => {
          return (
            <S.Container key={tag}>
              <S.FlexContents>
                <S.Tag>#{tag}</S.Tag>
                {!props.$product && (
                  <S.DeleteButton
                    tag={tag}
                    src={DeleteButton}
                    onClick={onClick ? () => onClick(tag) : undefined}
                    {...rest}
                  />
                )}
              </S.FlexContents>
            </S.Container>
          );
        })}
    </S.TagsContainer>
  );
}

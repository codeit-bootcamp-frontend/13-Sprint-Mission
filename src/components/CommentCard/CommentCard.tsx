import { useEffect, useState } from "react";
//
import * as S from "./CommentCard.style";
import defaultImg from "../../assets/icons/default.profile.icon.svg";
import { Input } from "../common/Input/Input";
import { EditSelect } from "../common/Select/Select";
import { button } from "../../constants/globalConstant.jsx";
import { useFormatUpDate } from "../../hooks/useFormatting.jsx";
//

interface Props {
  data: Comment;
}
export default function CommentCard({ data }: Props) {
  const [initialValue, setInitialValue] = useState(data.content);
  const [EditingId, setEditingId] = useState<number>(0);
  const [DeleteId, setDeleteId] = useState<number>(0);
  const formattedUpdate = useFormatUpDate(data.updatedAt);
  //
  const handleOnChange = (option: string) => {
    if (option === button.edit) {
      setEditingId(data.id);
    }
    if (option === button.delete) {
      setDeleteId(data.id);
    }
    return;
  };

  useEffect(() => {
    //삭제 리퀘스트 예정
  }, [DeleteId]);
  //
  return (
    <S.CommentWrapper>
      <S.CommentFlex>
        {data.id === EditingId ? (
          <Input
            name="editComment"
            $edit
            value={initialValue}
            onChange={(e) => setInitialValue(e.target.value)}
          />
        ) : (
          <S.Content>{initialValue}</S.Content>
        )}

        <S.ProfileWrapper>
          <S.ProfileDateWrapper>
            {data.writer.image ? (
              <S.ProfileImg src={data.writer.image} />
            ) : (
              <S.ProfileImg src={defaultImg} />
            )}

            <S.NickNameDateWrapper>
              <S.NickName>{data.writer.nickname}</S.NickName>
              <S.Date>{formattedUpdate}</S.Date>
            </S.NickNameDateWrapper>
          </S.ProfileDateWrapper>
          {data.id === EditingId && (
            <div>
              <S.CancelBtn onClick={() => setEditingId(0)}>
                {button.cancel}
              </S.CancelBtn>
              <S.EditConfirmBtn onClick={() => setEditingId(0)}>
                {button.editConfirm}
              </S.EditConfirmBtn>
            </div>
          )}
        </S.ProfileWrapper>
      </S.CommentFlex>
      {data.id !== EditingId && <EditSelect onChange={handleOnChange} />}
    </S.CommentWrapper>
  );
}

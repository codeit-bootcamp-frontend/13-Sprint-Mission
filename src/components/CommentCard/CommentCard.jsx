import { useEffect, useState } from "react";
//
import * as S from "./CommentCard.style.jsx";
import defaultImg from "../../assets/icons/default.profile.icon.svg";
import { Input } from "../common/Input/Input.jsx";
import { EditSelect } from "../common/Select/Select.jsx";
import { button } from "../../constants/globalConstant.jsx";
import { useFormatUpDate } from "../../hooks/useFormatting.jsx";
//
export default function CommentCard({ data }) {
  const [initialValue, setInitialValue] = useState(data.content);
  const [isEditing, setIsEditing] = useState(null);
  const [isDelete, setIsDelete] = useState(null);
  const formattedUpdate = useFormatUpDate(data.updatedAt);
  //
  const handleOnChange = (option) => {
    if (option === button.edit) {
      setIsEditing(data.id);
    }
    if (option === button.delete) {
      setIsDelete(data.id);
    }
    return;
  };

  useEffect(() => {
    //삭제 리퀘스트 예정
  }, [isDelete]);
  //
  return (
    <S.CommentWrapper>
      <S.CommentFlex>
        {data.id === isEditing ? (
          <Input
            $edit
            value={initialValue}
            onChange={(target) => setInitialValue(target.value)}
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
          {data.id === isEditing && (
            <div>
              <S.CancelBtn onClick={() => setIsEditing("")}>
                {button.cancel}
              </S.CancelBtn>
              <S.EditConfirmBtn onClick={() => setIsEditing("")}>
                {button.editConfirm}
              </S.EditConfirmBtn>
            </div>
          )}
        </S.ProfileWrapper>
      </S.CommentFlex>
      {data.id !== isEditing && <EditSelect onChange={handleOnChange} />}
    </S.CommentWrapper>
  );
}

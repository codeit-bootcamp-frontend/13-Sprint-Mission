import { KeyboardEvent, useState } from "react";
import Profile from "../common/Profile";
import { EditSelect } from "../Select";
import { deleteArticleComment, editArticleComment } from "@/lib/comments.api";

interface Props {
  comment: Comment;
}
export default function Comment({ comment }: Props) {
  const [isEdit, setIsEdit] = useState(false);
  const [currentValue, setCurrentValue] = useState(comment.content);
  const handleSelect = async (option: string) => {
    switch (option) {
      case "수정하기": {
        setIsEdit(true);
        break;
      }
      case "삭제하기": {
        await deleteArticleComment(comment.id);
        break;
      }
    }
  };
  const handleChange = async (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      await editArticleComment(comment.id, currentValue);
      setCurrentValue(currentValue);
    }
  };
  return (
    <>
      <div className="flex flex-col w-full gap-6 mb-3 h-fit">
        <div className="flex justify-between w-full">
          {isEdit ? (
            <input
              className="w-full"
              value={currentValue}
              onChange={(e) => {
                setCurrentValue(e.currentTarget.value);
              }}
              onKeyDown={(e) => handleChange(e)}
            />
          ) : (
            <p>{currentValue}</p>
          )}
          <EditSelect onChange={(option) => handleSelect(option)} />
        </div>
        <div>
          <Profile isComment value={comment} />
        </div>
      </div>
      <div className="w-full h-px bg-gray-300" />
    </>
  );
}

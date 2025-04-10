"use client";

import Button from "../common/Button/Button";
import FormField from "../common/FormField/FormField";
import FileInput from "../common/Input/FileInput";
import useAddBoard from "./useAddBoard";

export default function AddBoardForm() {
  const {
    formBoard,
    isPending,
    isFormCompelete,
    handleFormChange,
    handleBoardSubmit,
  } = useAddBoard();
  return (
    <form onSubmit={handleBoardSubmit} className="flex w-300 flex-col gap-8">
      <div className="flex items-center justify-between">
        <h1 className="text-bold20 text-gray800">게시글 쓰기</h1>
        <Button
          disabled={!isFormCompelete}
          paddingX={23}
          paddingY={12}
          rounded="8"
        >
          {isPending ? "..." : "등록"}
        </Button>
      </div>
      <div className="flex w-300 flex-col gap-6">
        <FormField
          label="제목"
          name="title"
          value={formBoard.title}
          onChange={handleFormChange}
          required
          placeholder="제목을 입력해 주세요"
        />
        <FormField
          label="내용"
          name="content"
          value={formBoard.content}
          onChange={handleFormChange}
          required
          isTextarea
          height={282}
          placeholder="내용을 입력해 주세요"
        />
        <FileInput
          label="이미지"
          onChange={() => {
            console.log("");
          }}
        />
      </div>
    </form>
  );
}

import AddBoardForm from "@/components/AddBoard/AddBoardForm";
import Button from "@/components/common/Button/Button";

export default function AddBoard() {
  return (
    <div className="mt-6 flex h-full items-start justify-center px-4 sm:px-6">
      <div className="flex w-300 flex-col gap-8">
        <div className="flex items-center justify-between">
          <h1 className="text-bold20 text-gray800">게시글 쓰기</h1>
          <Button paddingX={23} paddingY={12} rounded="8">
            등록
          </Button>
        </div>
        <AddBoardForm />
      </div>
    </div>
  );
}

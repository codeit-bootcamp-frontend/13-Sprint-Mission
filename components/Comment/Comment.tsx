import Button from "../common/Button/Button";
import Textarea from "../common/Textarea/Textarea";
import CommentList from "./CommentList";

export default function Comment({ articleId }: { articleId: number }) {
  return (
    <div className="flex flex-col gap-6 sm:gap-8">
      <div className="flex flex-col items-end gap-4">
        <div className="flex w-full flex-col gap-4">
          <label className="text-semi16 text-gray900">댓글달기</label>
          <Textarea height={104} placeholder="댓글을 입력해 주세요" />
        </div>
        <Button paddingX={23} paddingY={12} rounded="8">
          등록
        </Button>
      </div>
      <CommentList articleId={articleId} />
    </div>
  );
}

import { apiServer } from "@/lib/apiServer";
import Button from "../common/Button/Button";
import Textarea from "../common/Textarea/Textarea";

export default function Comment({ articleId }: { articleId: number }) {
  const handleCommentSubmit = async (formData: FormData) => {
    "use server";
    const content = formData.get("comment") as string;

    if (!content.trim()) return;

    await apiServer.post(`/articles/${articleId}/comments`, { content });
  };

  return (
    <form
      action={handleCommentSubmit}
      className="flex flex-col items-end gap-4"
    >
      <div className="flex w-full flex-col gap-4">
        <label className="text-semi16 text-gray900">댓글달기</label>
        <Textarea
          name="comment"
          height={104}
          placeholder="댓글을 입력해 주세요"
        />
      </div>
      <Button paddingX={23} paddingY={12} rounded="8">
        등록
      </Button>
    </form>
  );
}

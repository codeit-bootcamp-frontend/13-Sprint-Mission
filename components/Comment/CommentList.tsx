import { apiServer } from "@/lib/apiServer";
import Image from "next/image";

interface Comment {
  id: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  writer: {
    id: number;
    nickname: string;
    image: string;
  };
}

interface CommentResponse {
  list: Comment[];
}

const COMMENT_LIMIT = 3;

export default async function CommentList({
  articleId,
}: {
  articleId: number;
}) {
  const response = await apiServer.get<CommentResponse>(
    `/articles/${articleId}/comments?limit=${COMMENT_LIMIT}`,
  );
  const comments = response.data.list ?? [];

  if (comments.length === 0)
    return (
      <div className="text-regular16 text-gray400 m-auto flex flex-col items-center justify-center text-center">
        <Image
          src="/icons/comment.svg"
          alt="no comment"
          width={140}
          height={140}
          className="mb-4 cursor-pointer"
        />
        아직 댓글이 없어요
        <br />
        지금 댓글을 달아보세요!
      </div>
    );

  return (
    <>
      {comments.map((comment) => (
        <div key={comment.id} className="sm:bg-bg border-gray300 border-b pb-2">
          <div className="mb-6 flex items-center justify-between">
            <p className="text-gray800 text-regular14">{comment.content}</p>
            <Image src="/icons/kebab.svg" width={24} height={24} alt="kebab" />
          </div>
          <div className="flex items-start gap-2">
            <Image src="/icons/user.svg" width={32} height={32} alt="user" />
            <div className="flex flex-col gap-1">
              <span className="text-gray600 text-regular14">
                {comment.writer.nickname}
              </span>
              <span className="text-gray400 text-regular12">
                {comment.createdAt}
              </span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

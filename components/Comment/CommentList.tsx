import Image from "next/image";
import getComments from "./action";
import { cookies } from "next/headers";

export default async function CommentList({
  articleId,
}: {
  articleId: number;
}) {
  const comments = await getComments(articleId);

  const cookie = await cookies();
  const rawUserId = cookie.get("userId")?.value;
  const userId = rawUserId ? Number(JSON.parse(rawUserId)) : null;

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
            {comment.writer.id === userId && (
              <Image
                src="/icons/kebab.svg"
                width={24}
                height={24}
                alt="kebab"
              />
            )}
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

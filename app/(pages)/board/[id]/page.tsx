import Image from "next/image";
import Link from "next/link";
import Comment from "@/components/Comment/Comment";
import Button from "@/components/common/Button/Button";
import DetailBoard from "@/components/DetailBoard/DetailBoard";
import CommentList from "@/components/Comment/CommentList";

export default async function DetailBoardPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const articleId = Number(id);

  return (
    <>
      <div className="flex flex-col gap-8">
        <DetailBoard articleId={articleId} />
        <Comment articleId={articleId} />
        <CommentList articleId={articleId} />
      </div>
      <Link href="/board">
        <Button paddingX={64} paddingY={12} className="m-auto">
          목록으로 돌아가기
          <Image
            src="/icons/return.svg"
            alt="return"
            width={24}
            height={24}
            className="ml-1"
          />
        </Button>
      </Link>
    </>
  );
}

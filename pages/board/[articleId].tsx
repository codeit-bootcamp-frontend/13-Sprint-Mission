import Image from "next/image";
import Previous from "@/public/assets/icons/previous.icon.svg";
import Button from "@/components/Button";
import Link from "next/link";
import { EditSelect } from "@/components/Select";
import { Articles } from "@/components/Card";
import { GetServerSideProps } from "next";
import { deleteArticle, editArticle, getArticleDetail } from "@/lib/Articles";
import { Input } from "@/components/Input";
import { ChangeEvent, useState } from "react";
import { getArticleComment, postArticleComment } from "@/lib/comments.api";
import Comment from "@/components/board/comment";
import { signIn } from "@/lib/auth";
import noCommentImg from "@/public/assets/noComment.svg";
//
interface Props {
  articleId: string;
  detailArticle: Article;
  comments: Comment[];
}
const LIMIT = 5;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { articleId } = context.query as {
    articleId: string;
  };
  let cursor = 0;
  const detailArticle = await getArticleDetail(Number(articleId));
  const data = await getArticleComment(Number(articleId), LIMIT, cursor);
  cursor = data.cursor;
  return {
    props: { articleId, detailArticle, comments: data.list },
  };
};

export default function DetailArticle({
  articleId,
  detailArticle,
  comments,
}: Props) {
  const [commentValue, setCommentValue] = useState("");
  const [currentComments, setCurrentComments] = useState(comments);
  const [isEditArticle, setIsEditArticle] = useState(false);
  const [currentArticle, setCurrentArticle] = useState({
    title: detailArticle.title,
    content: detailArticle.content,
    image: detailArticle.image,
  });

  const handleSelect = async (option: string) => {
    switch (option) {
      case "수정하기": {
        setIsEditArticle(true);
        break;
        // await editArticle({ articleId, articleData: currentArticle });
      }
      case "삭제하기": {
        await deleteArticle(Number(articleId));
        break;
      }
    }
  };

  const handleChange = (value: string) => {
    setCommentValue(value);
  };

  const handleSubmit = async () => {
    const newComment = await postArticleComment(
      Number(articleId),
      commentValue
    );

    setCurrentComments((prev) => [newComment, ...prev]);
    setCommentValue("");
  };

  return (
    <div className="flex flex-col items-center w-full gap-8">
      <div className="flex flex-col w-full gap-6">
        <div className="relative">
          <Articles article={detailArticle} isDetailArticle />
          <div className="absolute top-0 right-0">
            <EditSelect onChange={(option) => handleSelect(option)} />
          </div>
        </div>
        <p>{detailArticle.content}</p>
      </div>
      <div className="flex flex-col items-end w-full gap-4">
        <Input
          type="text"
          label="댓글달기"
          name="comment"
          placeholder="댓글을 입력해주세요."
          value={commentValue}
          onChange={(value) => handleChange(value)}
        />
        <div className="w-[74px] h-[42px]">
          <Button disabled={Boolean(!commentValue)} onClick={handleSubmit}>
            등록
          </Button>
        </div>
      </div>
      <div className="flex flex-col w-full gap-6">
        {currentComments.length < 1 ? (
          <div className="flex flex-col items-center justify-center w-full gap-4">
            <Image
              src={noCommentImg}
              width={140}
              height={140}
              alt="코멘트 없음 "
            />
            <p className="text-gray-400 text-lg-regular">
              아직 댓글이 없어요,
              <br />
              지금 댓글을 달아보세요!
            </p>
          </div>
        ) : (
          currentComments.map((comment) => {
            return <Comment key={comment.id} comment={comment} />;
          })
        )}
      </div>
      <div className="w-[240px] h-[48px] ">
        <Link href={"/board"}>
          <Button className="rounded-[40px]" onClick={() => {}}>
            목록으로 돌아가기
            <Image src={Previous} width={24} height={24} alt="이전" />
          </Button>
        </Link>
      </div>
    </div>
  );
}

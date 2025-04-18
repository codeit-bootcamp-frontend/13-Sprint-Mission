'use client';

import BestPostCard from '@/app/(main)/boards/_components/BestPostCard';
import { ArticleResponse } from '@/lib/types/article';

type BestPostListProps = {
  posts: ArticleResponse[];
};

export default function BestPostList({ posts }: BestPostListProps) {
  console.log(posts);
  // posts 에서 likeCount 기준으로
  // map 으로 렌더링할 때 likeCount 가 가장 많은 순부터 적은 순으로 우선 3개 나열
  // GET API

  return (
    <div className="flex h-[169px] gap-6">
      {posts.map((post) => {
        // 로직
        const isValidImage = post.image?.startsWith(
          'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com',
        );

        return (
          <BestPostCard
            key={post.id}
            title={post.title}
            imageUrl={isValidImage ? post.image : '/images/default_card.png'}
            likeCount={post.likeCount}
            nickName={post.writer.nickname}
            createdAt={post.createdAt.split('T')[0]}
          />
        );
      })}
    </div>
  );
}

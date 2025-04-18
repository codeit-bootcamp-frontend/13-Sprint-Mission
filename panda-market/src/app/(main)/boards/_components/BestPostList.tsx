'use client';

import BestPostCard from '@/app/(main)/boards/_components/BestPostCard';
import { ArticleResponse } from '@/lib/types/article';

type BestPostListProps = {
  posts: ArticleResponse[];
};

export default function BestPostList({ posts }: BestPostListProps) {
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

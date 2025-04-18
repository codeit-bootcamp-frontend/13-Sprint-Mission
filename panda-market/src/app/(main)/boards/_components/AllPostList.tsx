'use client';

import { ArticleResponse } from '@/lib/types/article';
import PostCard from './PostCard';

type AllPostListProps = {
  posts: ArticleResponse[]; // [{},{},...]
};

export default function AllPostList({ posts }: AllPostListProps) {
  // tanstack query

  return (
    <div className="flex flex-col gap-6">
      {posts.map((post) => {
        const isValidImage = post.image?.startsWith(
          'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com',
        );
        return (
          <PostCard
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

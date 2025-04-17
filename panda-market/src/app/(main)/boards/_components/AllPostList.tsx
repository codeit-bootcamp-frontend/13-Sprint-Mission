'use client';

import { ArticleResponse } from '@/lib/types/article';
import PostCard from './PostCard';

type AllPostListProps = {
  posts: ArticleResponse[]; // [{},{},...]
};

export default function AllPostList({ posts }: AllPostListProps) {
  console.log(posts);
  // tanstack query
  return (
    <div className="flex flex-col gap-6">
      {posts.map((post) => (
        <PostCard
          key={post.id}
          title={post.title}
          imageUrl={post.image}
          likeCount={post.likeCount}
          nickName={post.writer.nickname}
          createdAt={post.createdAt}
        />
      ))}
    </div>
  );
}

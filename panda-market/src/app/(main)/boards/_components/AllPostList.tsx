'use client';

import PostCard from './PostCard';

export default function AllPostList() {
  // tanstack query
  return (
    <div className="flex flex-col gap-6">
      <PostCard />
      <PostCard />
      <PostCard />
    </div>
  );
}

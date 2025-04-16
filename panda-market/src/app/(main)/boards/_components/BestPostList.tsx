'use client';

import BestPostCard from '@/app/(main)/boards/_components/BestPostCard';

export default function BestPostList() {
  // GET API
  return (
    <div className="flex h-[169px] gap-6">
      <BestPostCard />
      <BestPostCard />
      <BestPostCard />
    </div>
  );
}

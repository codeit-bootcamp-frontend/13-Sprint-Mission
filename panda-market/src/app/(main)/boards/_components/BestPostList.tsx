'use client';

import BestPostCard from '@/app/(main)/boards/_components/BestPostCard';

export default function BestPostList() {
  // card rendering
  return (
    <div className="flex h-[169px] gap-6">
      <BestPostCard />
      <BestPostCard />
      <BestPostCard />
    </div>
  );
}

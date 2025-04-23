'use client';

import BestPost from '@/app/(main)/boards/_components/BestPost';
import { ArticleResponse } from '@/lib/types/article';
import { useRouter } from 'next/navigation';

type BestPostListProps = {
  posts: ArticleResponse[];
};

export default function BestPostList({ posts }: BestPostListProps) {
  const router = useRouter();

  const handlePostClick = (postId: number) => {
    router.push(`/boards/${postId}`);
  };

  return (
    <div className="flex h-[169px] gap-6">
      {posts.map((post) => {
        // invalid image url handling
        const isValidImage = post.image?.startsWith(
          'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com',
        );

        return (
          <BestPost
            key={post.id}
            title={post.title}
            imageUrl={isValidImage ? post.image : '/images/default_card.png'}
            likeCount={post.likeCount}
            nickName={post.writer.nickname}
            createdAt={post.createdAt.split('T')[0]}
            onClick={() => handlePostClick(post.id)}
          />
        );
      })}
    </div>
  );
}

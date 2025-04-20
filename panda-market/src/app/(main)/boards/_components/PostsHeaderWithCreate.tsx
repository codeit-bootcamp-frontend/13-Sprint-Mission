'use client';

import Button from '@/components/common/Button/index';
import { useRouter } from 'next/navigation';

export default function PostsHeaderWithCreate() {
  const router = useRouter();

  const handleCreatePost = () => {
    router.push('/boards/addboard');
  };

  return (
    <div className="flex justify-between">
      <h2 className="text-xl-bold font-bold text-gray-900">게시글</h2>
      <Button onClick={handleCreatePost}>글쓰기</Button>
    </div>
  );
}

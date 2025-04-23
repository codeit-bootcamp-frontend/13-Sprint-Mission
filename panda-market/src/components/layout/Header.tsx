import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="border border-[#DFDFDF] bg-[#FFFFFF]">
      <div className="mx-auto flex items-center justify-between px-[200px]">
        <div className="flex items-center">
          <Link href="/">
            <Image src="/logo/logo.svg" alt="logo" width={153} height={51} />
          </Link>
          <div className="ml-8 flex items-center gap-2.5">
            <Link href="/boards" className="px-[15px] py-[21px]">
              자유게시판
            </Link>
            <Link href="/items" className="px-[15px] py-[21px]">
              중고마켓
            </Link>
          </div>
        </div>
        <button className="cursor-pointer">
          <Image
            src="/icons/after_login.svg"
            alt="logo"
            width={0}
            height={0}
            style={{ width: '40px', height: 'auto' }}
          />
        </button>
      </div>
    </header>
  );
}

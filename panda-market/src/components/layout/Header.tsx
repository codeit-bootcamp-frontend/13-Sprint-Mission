import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <div className="mx-auto flex items-center justify-between px-[200px]">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/icons/logo.svg"
              alt="logo"
              width={0}
              height={0}
              style={{ width: '153px', height: 'auto' }}
            />
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
            src="/icons/afterLogin.svg"
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

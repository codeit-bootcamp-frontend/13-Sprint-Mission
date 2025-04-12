import Image from "next/image";
import Link from "next/link";

export default function Header() {
  // 자유게시판 boards
  // 중고마켓 items
  return (
    <header>
      <div className="flex justify-between items-center mx-auto px-[200px]">
        <div className="flex items-center">
          <Link href="/">
            <Image src="/icons/logo.svg" alt="logo" width={0} height={0} style={{ width: "153px", height: "auto" }} />
          </Link>
          <div className="flex items-center gap-2.5  ml-8">
            <Link href="/boards" className="px-[15px] py-[21px]">
              자유게시판
            </Link>
            <Link href="/items" className="px-[15px] py-[21px]">
              중고마켓
            </Link>
          </div>
        </div>
        <button className="cursor-pointer">
          <Image src="/icons/afterLogin.svg" alt="logo" width={0} height={0} style={{ width: "40px", height: "auto" }} />
        </button>
      </div>
    </header>
  );
}

// font-family: Pretendard;
// font-weight: 700;
// font-size: 18px;
// line-height: 26px;
// letter-spacing: 0%;
// text-align: center;
// vertical-align: middle;

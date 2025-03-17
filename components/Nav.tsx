import Link from "next/link";
import pandaLogo from "@/public/assets/Logo/pandaLogo.svg";
import textLogo from "@/public/assets/Logo/textLogo.svg";
import myLogo from "@/public/assets/icons/default.profile.icon.svg";
import Image from "next/image";
import useWindowSize from "@/hooks/useWindowSize";
export default function Nav() {
  const device: string = useWindowSize();
  return (
    <div className="fixed top-0 left-0 w-screen h-[70px] bg-white py-[10px] px-[200px] NavPadding:px-[24px] NavPadding:py-[10px]  mobile:px-[15px] mobile:py-[15px] z-50">
      <div className="flex justify-between w-screen max-w-full ">
        <div className="flex items-center w-screen gap-8 mobile:gap-2">
          <div className="flex w-auto gap-2">
            <Image
              className="block w-10 h-10 mobile:hidden"
              src={pandaLogo}
              alt="판다로고"
              width={40}
              height={40}
            />
            <Image
              className="w-[103px] h-[51px] cursor-pointer mobile:w-20"
              src={textLogo}
              alt="판다마켓"
              width={103}
              height={51}
            />
          </div>
          <div className="flex w-auto gap-7 mobile:gap-2 font-Pretendard text-H4Bold">
            <Link href="/docs">자유게시판</Link>
            <Link href="/items">중고마켓</Link>
          </div>
        </div>
        <Link href="/mypage">
          <Image
            className="w-10 h-10"
            src={myLogo}
            alt="프로필 이미지"
            width={40}
            height={40}
          />
        </Link>
      </div>
    </div>
  );
}

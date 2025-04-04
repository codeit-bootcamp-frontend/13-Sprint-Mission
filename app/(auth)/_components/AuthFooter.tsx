import Image from "next/image";
import Link from "next/link";
import google from "@/public/icons/google.svg";
import kakao from "@/public/icons/kakao.svg";

interface FooterProps {
  title: string;
  href: string;
  hrefMessage: string;
}

export default function AuthFooter({ title, href, hrefMessage }: FooterProps) {
  return (
    <>
      <div className="w-full bg-[#e6f2ff] flex justify-between items-center py-4 px-[23px] rounded-lg">
        <p className="text-gray800 text-Regular16">간편 로그인하기</p>
        <div className="flex gap-4">
          <Link href="https://www.google.com">
            <Image src={google} width={42} height={42} alt="google" />
          </Link>
          <Link href="https://www.kakaocorp.com/page">
            <Image src={kakao} width={42} height={42} alt="kakao" />
          </Link>
        </div>
      </div>
      <div className="flex justify-center items-center text-Regular14 text-gray800">
        {title}
        <Link className="text-blue underline ml-1" href={href}>
          {hrefMessage}
        </Link>
      </div>
    </>
  );
}

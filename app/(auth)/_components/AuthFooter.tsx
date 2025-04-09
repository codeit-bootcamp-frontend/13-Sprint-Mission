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
      <div className="flex w-full items-center justify-between rounded-lg bg-[#e6f2ff] px-[23px] py-4">
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
      <div className="text-Regular14 text-gray800 flex items-center justify-center">
        {title}
        <Link className="text-blue ml-1 underline" href={href}>
          {hrefMessage}
        </Link>
      </div>
    </>
  );
}

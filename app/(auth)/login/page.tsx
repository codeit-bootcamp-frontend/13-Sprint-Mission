import Image from "next/image";
import Link from "next/link";
import panda from "@/public/icons/panda.svg";
import AuthFooter from "../_components/AuthFooter";
import LoginForm from "@/components/Login/LoginForm";

export default function Login() {
  return (
    <div className="min-h-[calc(100vh-70px)] flex justify-center items-center">
      <div className="w-[640px] px-6 flex flex-col justify-center items-center gap-10 maxS:px-4">
        <Link className="flex items-center gap-5" href="/">
          <Image
            src={panda}
            width={103}
            height={103}
            alt="logo"
            className="[@media(max-width:480px)]:hidden"
          />
          <h1 className="font-rokaf text-[66px] font-bold text-blue">
            판다마켓
          </h1>
        </Link>
        <div className="w-full flex flex-col gap-6">
          <LoginForm />
          <AuthFooter
            href="/signup"
            title="판다마켓이 처음이신가요?"
            hrefMessage="회원가입"
          />
        </div>
      </div>
    </div>
  );
}

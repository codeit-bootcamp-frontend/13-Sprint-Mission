import InputField from "@/components/InputField";
import logo_md from "@/assets/logo_md.svg";
import logo_lg from "@/assets/logo_lg.svg";
import { useLocation, Link } from "react-router";
import ic_google from "@/assets/ic_google.svg";
import ic_kakaoTalk from "@/assets/ic_kakaoTalk.svg";

function LogoImage() {
  return (
    <>
      <img src={logo_md} alt="홈으로 이동" className="block md:hidden" />
      <img src={logo_lg} alt="홈으로 이동" className="hidden md:block" />
    </>
  );
}

function Auth() {
  const location = useLocation();
  const isSignUp = location.pathname === "/signup";

  return (
    <main className="my-15 flex flex-col items-center px-4">
      <Link to="/" className="mb-6 md:mb-10">
        <LogoImage />
      </Link>
      <div className="flex w-full max-w-160 flex-col gap-6">
        <form className="flex flex-col gap-6">
          <InputField name="email" />
          {isSignUp && <InputField name="nickname" />}
          <InputField name="password" />
          {isSignUp && <InputField name="passwordConfirm" />}
          <button
            type="submit"
            className="h-14 cursor-pointer rounded-[40px] bg-gray-400 px-31 py-4 text-xl font-semibold text-gray-100"
          >
            {isSignUp ? "회원가입" : "로그인"}
          </button>
        </form>
        <div className="flex items-center justify-between rounded-lg bg-blue-50 px-6 py-4">
          <div className="select-none">간편 로그인하기</div>
          <div className="flex gap-4">
            <a
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={ic_google} alt="구글 소셜 로그인" />
            </a>
            <a
              href="https://www.kakaocorp.com/page/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={ic_kakaoTalk} alt="카카오 소셜 로그인" />
            </a>
          </div>
        </div>
        {isSignUp ? (
          <div className="m-auto text-sm select-none">
            이미 회원이신가요?{" "}
            <Link to="/login" className="text-blue-400 underline">
              로그인
            </Link>
          </div>
        ) : (
          <div className="m-auto select-none">
            판다마켓이 처음이신가요?{" "}
            <Link to="/signup" className="text-blue-400 underline">
              회원가입
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}

export default Auth;

import InputField from "@/components/InputField";
import logo_md from "@/assets/logo_md.svg";
import logo_lg from "@/assets/logo_lg.svg";
import { useLocation, Link } from "react-router";
import ic_google from "@/assets/ic_google.svg";
import ic_kakaoTalk from "@/assets/ic_kakaoTalk.svg";
import { useState } from "react";

const INPUT_FIELD_CONFIG = {
  email: {
    id: "email",
    type: "email",
    label: "이메일",
    placeholder: "이메일을 입력해주세요",
    emptyMessage: "이메일을 입력해주세요.",
    invalidMessage: "잘못된 이메일 형식입니다.",
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
  nickname: {
    id: "nickname",
    type: "text",
    label: "닉네임",
    placeholder: "닉네임을 입력해주세요",
    emptyMessage: "닉네임을 입력해주세요.",
    invalidMessage: "닉네임을 입력해주세요.",
    pattern: /^[a-zA-Z0-9가-힣]{2,10}$/,
  },
  password: {
    id: "password",
    type: "password",
    label: "비밀번호",
    placeholder: "비밀번호를 입력해주세요",
    emptyMessage: "비밀번호를 입력해주세요.",
    invalidMessage: "비밀번호를 8자 이상 입력해주세요.",
    pattern: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
  },
  passwordConfirm: {
    id: "passwordConfirm",
    type: "password",
    label: "비밀번호 확인",
    placeholder: "비밀번호를 다시 한 번 입력해주세요",
    emptyMessage: "비밀번호가 일치하지 않습니다.",
    invalidMessage: "비밀번호가 일치하지 않습니다.",
    pattern: null,
  },
};

export function isEmptyString(value) {
  return typeof value === "string" && value.trim() === "";
}

function LogoImage() {
  return (
    <>
      <img src={logo_md} alt="홈으로 이동" className="block md:hidden" />
      <img src={logo_lg} alt="홈으로 이동" className="hidden md:block" />
    </>
  );
}

const SIGNUP_FORM = [
  { key: "email-signup", name: "email" },
  { key: "nickname-signup", name: "nickname" },
  { key: "password-signup", name: "password" },
  { key: "passwordConfirm-signup", name: "passwordConfirm" },
];

const LOGIN_FORM = [
  { key: "email-login", name: "email" },
  { key: "password-login", name: "password" },
];

function Login() {
  const location = useLocation();
  const isSignUp = location.pathname === "/signup";
  const [formData, setFormData] = useState({
    email: "",
    nickname: "",
    password: "",
    passwordConfirm: "",
  });
  const [isInputEmpty, setIsInputEmpty] = useState({});
  const [isInputInvalid, setIsInputInvalid] = useState({});
  const [canSubmit, setCanSubmit] = useState(false);

  const handleInputChange = (name, event) => {
    setFormData((prev) => ({
      ...prev,
      [name]: event.target.value,
    }));
  };

  const handleEmptyCheck = (name) => {
    setIsInputEmpty((prev) => ({
      ...prev,
      [name]: isEmptyString(formData[name]),
    }));
  };

  const handleInvalidCheck = (name) => {
    setIsInputInvalid((prev) => ({
      ...prev,
      [name]:
        INPUT_FIELD_CONFIG[name].pattern !== null
          ? !INPUT_FIELD_CONFIG[name].pattern.test(formData[name])
          : formData[name] !== formData["password"],
    }));
    console.log(isInputInvalid);
  };

  const handleCheckForm = () => {
    console.log(Object.values(formData));
    if (
      Object.values(formData).every((value) => !isEmptyString(value)) &&
      Object.values(isInputInvalid).every((isInvalid) => !isInvalid)
    ) {
      setCanSubmit(true);
    }
  };

  return (
    <main className="my-15 flex flex-col items-center px-4">
      <Link to="/" className="mb-6 md:mb-10">
        <LogoImage />
      </Link>
      <div className="flex w-full max-w-160 flex-col gap-6">
        <form className="flex flex-col gap-6">
          {isSignUp
            ? SIGNUP_FORM.map(({ key, name }) => (
                <InputField
                  key={key}
                  name={name}
                  onChange={handleInputChange}
                  onBlurCheckEmpty={handleEmptyCheck}
                  onBlurCheckInvalid={handleInvalidCheck}
                  onBlurCheckForm={handleCheckForm}
                  isEmpty={isInputEmpty[name]}
                  isInvalid={isInputInvalid[name]}
                  value={formData[name]}
                />
              ))
            : LOGIN_FORM.map(({ key, name }) => (
                <InputField
                  key={key}
                  name={name}
                  onChange={handleInputChange}
                  onBlurCheckEmpty={handleEmptyCheck}
                  onBlurCheckInvalid={handleInvalidCheck}
                  onBlurCheckForm={handleCheckForm}
                  isEmpty={isInputEmpty[name]}
                  isInvalid={isInputInvalid[name]}
                  value={formData[name]}
                />
              ))}
          <button
            type="submit"
            className={`h-14 rounded-[40px] px-31 py-4 text-xl font-semibold text-gray-100 ${canSubmit ? "cursor-pointer bg-blue-500" : "cursor-not-allowed bg-gray-400"} `}
            disabled={!canSubmit}
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
            {"이미 회원이신가요? "}
            <Link to="/login" className="text-blue-400 underline">
              로그인
            </Link>
          </div>
        ) : (
          <div className="m-auto text-sm select-none">
            {"판다마켓이 처음이신가요? "}
            <Link to="/signup" className="text-blue-400 underline">
              회원가입
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}

export default Login;

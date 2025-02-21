import InputField from "@/components/InputField";
import logo_md from "@/assets/logo_md.svg";
import logo_lg from "@/assets/logo_lg.svg";
import { useLocation, Link } from "react-router";
import ic_google from "@/assets/ic_google.svg";
import ic_kakaoTalk from "@/assets/ic_kakaoTalk.svg";
import { useState } from "react";
import { isEmptyString } from "@/utils/stringUtils";
import { FORM_FIELDS } from "@/constants/formFields";

function LogoImage() {
  return (
    <>
      <img src={logo_md} alt="홈으로 이동" className="block md:hidden" />
      <img src={logo_lg} alt="홈으로 이동" className="hidden md:block" />
    </>
  );
}

const LOGIN_FORM = [
  { key: "email-login", name: "email" },
  { key: "password-login", name: "password" },
];

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isInputEmpty, setIsInputEmpty] = useState({
    email: false,
    password: false,
  });
  const [isInputInvalid, setIsInputInvalid] = useState({
    email: false,
    password: false,
  });
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
        FORM_FIELDS[name].pattern !== null
          ? !FORM_FIELDS[name].pattern.test(formData[name])
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
          {LOGIN_FORM.map(({ key, name }) => (
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
            로그인
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
        {
          <div className="m-auto text-sm select-none">
            {"판다마켓이 처음이신가요? "}
            <Link to="/signup" className="text-blue-400 underline">
              회원가입
            </Link>
          </div>
        }
      </div>
    </main>
  );
}

export default Login;

import InputField from "@/components/InputField";
import LogoImage from "@/components/LogoImage";
import logo_md from "@/assets/logo_md.svg";
import logo_lg from "@/assets/logo_lg.svg";
import ic_google from "@/assets/ic_google.svg";
import ic_kakaoTalk from "@/assets/ic_kakaoTalk.svg";
import { useState } from "react";
import { Link } from "react-router";
import { isEmptyString } from "@/utils/stringUtils";
import { FORM_FIELDS } from "@/constants/formFields";

const SIGNUP_FORM = ["email", "nickname", "password", "passwordConfirm"];

function Signup() {
  const [formData, setFormData] = useState(
    Object.fromEntries(SIGNUP_FORM.map((name) => [name, ""])),
  );
  const [isInputEmpty, setIsInputEmpty] = useState(
    Object.fromEntries(SIGNUP_FORM.map((name) => [name, false])),
  );
  const [isInputInvalid, setIsInputInvalid] = useState(
    Object.fromEntries(SIGNUP_FORM.map((name) => [name, false])),
  );
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
  };

  const handleCheckForm = () => {
    if (
      Object.values(formData).every((value) => !isEmptyString(value)) &&
      Object.values(isInputInvalid).every((isInvalid) => !isInvalid)
    ) {
      setCanSubmit(true);
    }
  };

  return (
    <main className="my-15 flex flex-col items-center px-4">
      <Link to="/" className="mb-6 md:mb-10" title="홈으로 이동">
        <LogoImage small={logo_md} large={logo_lg} />
      </Link>
      <div className="flex w-full max-w-160 flex-col gap-6">
        <form className="flex flex-col gap-6">
          {SIGNUP_FORM.map((name, index) => (
            <InputField
              key={index}
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
            title="회원가입"
          >
            회원가입
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
            {"이미 회원이신가요? "}
            <Link
              to="/login"
              className="text-blue-400 underline"
              title="로그인 페이지로 이동"
            >
              로그인
            </Link>
          </div>
        }
      </div>
    </main>
  );
}

export default Signup;

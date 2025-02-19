import ic_visibility_off from "@/assets/ic_visibility_off.svg";
import { useState } from "react";

const INPUT_FIELDS = {
  email: {
    id: "email",
    type: "email",
    label: "이메일",
    placeholder: "이메일을 입력해주세요",
  },
  nickname: {
    id: "nickname",
    type: "text",
    label: "닉네임",
    placeholder: "닉네임을 입력해주세요",
  },
  password: {
    id: "password",
    type: "password",
    label: "비밀번호",
    placeholder: "비밀번호를 입력해주세요",
  },
  passwordConfirm: {
    id: "passwordConfirm",
    type: "password",
    label: "비밀번호 확인",
    placeholder: "비밀번호를 다시 한 번 입력해주세요",
  },
};

function InputField({ name, isError }) {
  const { id, type, label, placeholder } = INPUT_FIELDS[name];
  const [isFocused, setIsFocused] = useState(false);
  const [currrentInputType, setCurrrentInputType] = useState(type);

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
  };

  const togglePasswordVisibility = () => {
    setCurrrentInputType((prevInputType) =>
      prevInputType === "password" ? "text" : "password",
    );
  };

  return (
    <div>
      <label htmlFor={id} className="text-gray-800">
        {label}
      </label>
      <div
        className={`mt-4 flex h-14 w-full items-center justify-stretch gap-3 rounded-xl bg-gray-100 px-6 ${isFocused ? "outline-2 outline-blue-500" : ""} ${isError ? "outline-red outline-2" : ""}`}
      >
        <input
          id={id}
          name={name}
          type={type === "password" ? currrentInputType : type}
          placeholder={placeholder}
          className="w-full text-gray-800 placeholder:font-normal placeholder:text-gray-400 focus:outline-none"
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
        {type === "password" ? (
          <button type="button" className="cursor-pointer">
            <img
              src={ic_visibility_off}
              alt="비밀번호 표시하기"
              onClick={togglePasswordVisibility}
            />
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default InputField;

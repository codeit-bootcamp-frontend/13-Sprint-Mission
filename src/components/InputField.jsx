import ic_visibility_off from "@/assets/ic_visibility_off.svg";
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
    emptyMessage: "비밀번호를 다시 한 번 입력해주세요.",
    invalidMessage: "비밀번호가 일치하지 않습니다.",
    pattern: null,
  },
};

function InputField({
  name,
  value,
  onChange,
  onBlurCheckEmpty,
  onBlurCheckInvalid,
  onBlurCheckForm,
  isEmpty,
  isInvalid,
}) {
  const { id, type, label, placeholder } = INPUT_FIELD_CONFIG[name];
  const [isFocused, setIsFocused] = useState(false);
  const [currentInputType, setCurrentInputType] = useState(type);
  const hasError = false;

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
    onBlurCheckEmpty(name);
    onBlurCheckInvalid(name);
    onBlurCheckForm();
  };

  const handleTogglePasswordVisibility = () => {
    setCurrentInputType((prevInputType) =>
      prevInputType === "password" ? "text" : "password",
    );
  };

  const handleInputChange = (event) => {
    onChange(name, event);
  };

  return (
    <div>
      <label htmlFor={id} className="text-gray-800">
        {label}
      </label>
      <div
        className={`mt-4 flex h-14 w-full items-center justify-stretch gap-3 rounded-xl bg-gray-100 px-6 ${isFocused ? "outline-2 outline-blue-500" : ""} ${isEmpty || isInvalid ? "outline-red outline-2" : ""}`}
      >
        <input
          id={id}
          name={name}
          type={type === "password" ? currentInputType : type}
          placeholder={placeholder}
          value={value}
          className="w-full text-gray-800 placeholder:font-normal placeholder:text-gray-400 focus:outline-none"
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
        {type === "password" ? (
          <button type="button" className="cursor-pointer">
            <img
              src={ic_visibility_off}
              alt="비밀번호 표시하기"
              onClick={handleTogglePasswordVisibility}
            />
          </button>
        ) : null}
      </div>
      {(isEmpty || isInvalid) && (
        <div className="text-red mt-2 ml-4 text-sm font-semibold">
          {isEmpty
            ? INPUT_FIELD_CONFIG[name].emptyMessage
            : INPUT_FIELD_CONFIG[name].invalidMessage}
        </div>
      )}
    </div>
  );
}

export default InputField;

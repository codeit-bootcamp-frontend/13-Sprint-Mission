import ic_visibility_on from "@/assets/ic_visibility_on.svg";
import ic_visibility_off from "@/assets/ic_visibility_off.svg";
import { useState } from "react";

function InputField({
  id,
  name,
  type,
  label,
  placeholder,
  emptyMessage,
  invalidMessage,
  value,
  onChange,
  onBlur,
  hasValue,
  isValidated,
}) {
  const [isFocused, setIsFocused] = useState(false);
  const [currentInputType, setCurrentInputType] = useState(type);
  const [hasBeenTouched, setHasBeenTouched] = useState(false);

  const handleInputChange = (event) => {
    onChange(name, event);
  };

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
    setHasBeenTouched(true); // 한 번이라도 블러되면 true로 설정
    onBlur(name);
  };

  const togglePasswordVisibility = () => {
    setCurrentInputType((prevInputType) =>
      prevInputType === "password" ? "text" : "password",
    );
  };

  return (
    <div>
      <label htmlFor={id} className="text-gray-800">
        {label}
      </label>
      <div
        className={`mt-4 flex h-14 w-full items-center justify-stretch gap-3 rounded-xl bg-gray-100 px-6 ${isFocused ? "outline-2 outline-blue-500" : ""} ${hasBeenTouched && !(hasValue && isValidated) ? "outline-red outline-2" : ""}`}
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
              src={
                currentInputType === "password"
                  ? ic_visibility_on
                  : ic_visibility_off
              }
              title="비밀번호 표시"
              alt="비밀번호 표시"
              onClick={togglePasswordVisibility}
            />
          </button>
        ) : null}
      </div>
      {hasBeenTouched && !(hasValue && isValidated) && (
        <div className="text-red mt-2 ml-4 text-sm font-semibold">
          {!hasValue ? emptyMessage : invalidMessage}
        </div>
      )}
    </div>
  );
}

export default InputField;

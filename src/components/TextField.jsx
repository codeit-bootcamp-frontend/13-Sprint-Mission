import { useState } from "react";

function TextField({
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
  rows = 10,
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
    setHasBeenTouched(true);
    onBlur(name);
  };

  const togglePasswordVisibility = () => {
    setCurrentInputType((prevInputType) =>
      prevInputType === "password" ? "text" : "password",
    );
  };

  return (
    <div>
      <label htmlFor={id} className="text-lg font-bold text-gray-800">
        {label}
      </label>
      <div
        className={`mt-4 flex w-full items-center justify-stretch gap-3 rounded-xl bg-gray-100 px-6 py-4 ${isFocused ? "outline-2 outline-blue-500" : ""} ${hasBeenTouched && !(hasValue && isValidated) ? "outline-red outline-2" : ""}`}
      >
        <textarea
          id={id}
          name={name}
          type={type === "password" ? currentInputType : type}
          placeholder={placeholder}
          value={value}
          className="w-full resize-none text-gray-800 placeholder:font-normal placeholder:text-gray-400 focus:outline-none"
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          rows={`${rows}`}
        />
      </div>
      {hasBeenTouched && !(hasValue && isValidated) && (
        <div className="text-red mt-2 ml-4 text-sm font-semibold">
          {!hasValue ? emptyMessage : invalidMessage}
        </div>
      )}
    </div>
  );
}

export default TextField;

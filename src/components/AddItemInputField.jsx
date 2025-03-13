import { useState } from "react";

function AddItemInputField({
  id,
  name,
  type,
  label,
  placeholder,
  value,
  setValue,
  onEnterKeyDown,
  onBlur,
}) {
  const handleEnterKeyDown = (e) => {
    if (!onEnterKeyDown) return;
    if (e.key === "Enter") {
      e.preventDefault();
      onEnterKeyDown(e.target.value);
      setValue("");
    }
  };

  return (
    <div>
      <label htmlFor={id} className="text-lg font-bold text-gray-800">
        {label}
      </label>
      <div
        className={`mt-4 flex h-14 w-full items-center justify-stretch gap-3 rounded-xl bg-gray-100 px-6`}
      >
        <input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          className={`w-full text-gray-800 placeholder:font-normal placeholder:text-gray-400 focus:outline-none ${type === "number" ? "[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none" : ""}`}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleEnterKeyDown}
          onBlur={onBlur}
        />
      </div>
    </div>
  );
}

export default AddItemInputField;

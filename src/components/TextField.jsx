import { useState } from "react";

function TextField({
  id,
  name,
  type,
  label,
  placeholder,
  value,
  setValue,
  rows = 10,
  onBlur,
}) {
  return (
    <div>
      <label htmlFor={id} className="text-lg font-bold text-gray-800">
        {label}
      </label>
      <div
        className={`mt-4 flex w-full items-center justify-stretch gap-3 rounded-xl bg-gray-100 px-6 py-4`}
      >
        <textarea
          id={id}
          name={name}
          type={type === "password" ? currentInputType : type}
          placeholder={placeholder}
          value={value}
          className="w-full resize-none text-gray-800 placeholder:font-normal placeholder:text-gray-400 focus:outline-none"
          onChange={(e) => setValue(e.target.value)}
          rows={`${rows}`}
          onBlur={() => onBlur()}
        />
      </div>
    </div>
  );
}

export default TextField;

import ic_visibility_off from "@/assets/ic_visibility_off.svg";

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

function InputField({ name }) {
  const { id, type, label, placeholder } = INPUT_FIELDS[name];

  return (
    <div>
      <label htmlFor={id} className="text-[#1F2937]">
        {label}
      </label>
      <div className="mt-4 flex h-14 w-full items-center justify-stretch gap-3 rounded-xl bg-[#F3F4F6] px-6">
        <input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          className="w-full text-[#1F2937] placeholder:text-[#9CA3AF]"
        />
        {name.includes("password") ? (
          <button type="button">
            <img src={ic_visibility_off} alt="비밀번호 표시" />
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default InputField;

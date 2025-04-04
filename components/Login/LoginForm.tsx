import Button from "../common/Button/Button";
import Input from "../common/Input/Input";

export default function LoginForm() {
  return (
    <form className="w-full flex flex-col gap-6">
      <Input
        id="email"
        label="이메일"
        name="email"
        type="email"
        placeholder="이메일을 입력해주세요"
        height={56}
        required
      />
      <Input
        id="password"
        label="비밀번호"
        name="password"
        type="password"
        placeholder="비밀번호를 입력해주세요"
        height={56}
        required
      />
      <Button fullWidth fontSize="20" paddingY={16}>
        로그인
      </Button>
    </form>
  );
}

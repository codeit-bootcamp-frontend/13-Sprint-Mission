import SignupForm from "@/components/Signup/SignupForm";
import AuthFooter from "../_components/AuthFooter";

export default function Signup() {
  return (
    <div className="flex w-full flex-col gap-6">
      <SignupForm />
      <AuthFooter
        href="/login"
        title="이미 회원이신가요?"
        hrefMessage="로그인"
      />
    </div>
  );
}

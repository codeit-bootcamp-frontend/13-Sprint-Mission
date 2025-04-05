import AuthFooter from "../_components/AuthFooter";
import LoginForm from "@/components/Login/LoginForm";

export default function Login() {
  return (
    <div className="w-full flex flex-col gap-6">
      <LoginForm />
      <AuthFooter
        href="/signup"
        title="판다마켓이 처음이신가요?"
        hrefMessage="회원가입"
      />
    </div>
  );
}

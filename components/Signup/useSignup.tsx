import { useState } from "react";
import checkAllFormComplete from "@/utils/checkAllFormComplete";
import { useRouter } from "next/navigation";
import signupValidate from "./signupValidate";

export interface SignupType {
  email: string;
  nickname: string;
  password: string;
  checkPassword: string;
}

export interface ResponseState {
  success: boolean;
  field?: string;
  message: string;
}

const INITIAL_SIGNUP_FORM_VALUE = {
  email: "",
  nickname: "",
  password: "",
  checkPassword: "",
};

const SPACE_KEY = " ";

export default function useSignup() {
  const [formData, setFormData] = useState<SignupType>(
    INITIAL_SIGNUP_FORM_VALUE
  );
  const [isPasswordVisible, setIsPasswordVisible] = useState<
    Record<string, boolean>
  >({
    password: false,
    checkPassword: false,
  });
  const [state, setState] = useState<ResponseState>({
    success: false,
    field: "",
    message: "",
  });
  const [isPending, setIsPending] = useState(false);

  const router = useRouter();

  const isFormComplete = checkAllFormComplete({
    email: formData.email,
    nickname: formData.nickname,
    password: formData.password,
    checkPassword: formData.checkPassword,
  });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePreventSpace = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== SPACE_KEY) return;
    e.preventDefault();
  };

  const toggleVisiblePassword = (name: string) => {
    setIsPasswordVisible((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const handleSignupSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isFormComplete) return;

    const validation = signupValidate(formData);

    if (validation) {
      return setState(validation);
    }

    setIsPending(true);

    try {
      const response = await fetch("/api/auth/signUp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          nickname: formData.nickname,
          password: formData.password,
          passwordConfirmation: formData.checkPassword,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        router.push("/login");
        return;
      }

      if (!response.ok) {
        const { success, field, message } = result;
        setState({ success, field, message });
        return;
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsPending(false);
    }
  };

  return {
    formData,
    state,
    isPasswordVisible,
    isPending,
    isFormComplete,
    handleFormChange,
    handlePreventSpace,
    toggleVisiblePassword,
    handleSignupSubmit,
  };
}

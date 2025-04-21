import { useState } from "react";
import { useRouter } from "next/navigation";
import { ResponseState } from "../Signup/useSignup";
import checkAllFormComplete from "@/utils/checkAllFormComplete";
import loginValidate from "./loginValidate";
import { setItem } from "@/utils/localstorage";
import { apiClient } from "@/lib/apiClient";
import { LoginResponse } from "@/app/api/auth/signIn/route";

export interface LoginType {
  email: string;
  password: string;
}

interface LoginResponseType {
  data: LoginResponse;
  status: number;
}

const INITIAL_LOGIN_FORM_VALUE = {
  email: "",
  password: "",
};

export default function useLogin() {
  const [formData, setFormData] = useState<LoginType>(INITIAL_LOGIN_FORM_VALUE);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [state, setState] = useState<ResponseState>({
    field: "",
    message: "",
  });
  const [isPending, setIsPending] = useState(false);

  const router = useRouter();

  const toggleVisiblePassword = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const isFormComplete = checkAllFormComplete({
    email: formData.email,
    password: formData.password,
  });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isFormComplete) return;

    const validation = loginValidate(formData);

    if (validation) {
      return setState(validation);
    }

    try {
      const response = await apiClient.post<LoginResponseType>(
        "/api/auth/signIn",
        {
          email: formData.email,
          password: formData.password,
        },
      );

      const result = response.data;

      if (response.status === 200) {
        router.push("/");
        setItem<string>("accessToken", result.data.accessToken);
        setItem<number>("userId", result.data.user.id);

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
    toggleVisiblePassword,
    handleFormChange,
    handleLoginSubmit,
  };
}

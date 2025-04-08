import instance from "./api";
import Cookies from "js-cookie";

export const setAccessToken = (token: string) => {
  Cookies.set("accessToken", token, {
    path: "/",
    expires: 7,
    sameSite: "Strict",
  });
};

export const removeAccessToken = () => {
  Cookies.remove("accessToken", { path: "/" });
};

const TEST_EMAIL = "test98@email.com";
const TEST_PASSWORD = "12345678";

export async function signIn() {
  const res = await instance.post(`/auth/signIn`, {
    email: TEST_EMAIL,
    password: TEST_PASSWORD,
  });
  setAccessToken(res.data.accessToken);
}

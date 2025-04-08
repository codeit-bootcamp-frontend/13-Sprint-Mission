import Button from "@/components/Button";
import { ImgInput, Input } from "@/components/Input";
import instance from "@/lib/api";
import { createArticle } from "@/lib/Articles";
import { GetServerSideProps } from "next";
import { parseCookies, setCookie } from "nookies";
import { useState } from "react";

const InputAttributes = [
  {
    name: "title",
    value: "",
    placeholder: "제목을 입력해주세요",
    label: "제목",
    validation: "",
    key: 1,
  },
  {
    name: "content",
    value: "",
    placeholder: "내용을 입력해주세요",
    label: "내용",
    validation: "",
    key: 2,
  },
];

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const cookies = parseCookies(ctx);
  const accessToken = cookies.accessToken;
  const refreshToken = cookies.refreshToken;
  if (!accessToken) {
    return {
      redirect: {
        destination: "/",
      },
      props: {},
    };
  }
  try {
    await instance.get(`/user/me`);
  } catch (err: any) {
    if (err.response?.status === 401) {
      try {
        const refreshRes = await instance.post(
          `/auth/refresh-token`,
          {},
          { headers: { Cookie: `refreshToken=${refreshToken}` } }
        );
        const newAccessToken = refreshRes.data.accessToken;
        setCookie(ctx, "accessToken", newAccessToken, {
          path: "/",
          httpOnly: true,
          sameSite: "lax",
        });
      } catch {
        return {
          redirect: { destination: "/" },
          props: {},
        };
      }
    }
  }
  return { props: {} };
};

export default function AddBoard() {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    image: "",
  });

  const handleChange = (key: string, value: unknown) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async () => {
    await createArticle(formData);
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="w-full flex h-[42px] items-center justify-between">
        <p className="font-bold text-[20px]">게시글 쓰기 </p>
        <div className="w-[74px] h-[42px]">
          <Button
            onClick={() => {
              handleSubmit();
            }}
          >
            등록
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        {InputAttributes.map((input) => {
          return (
            <Input
              key={input.key}
              onChange={(value: string) => handleChange(input.name, value)}
              name={input.name}
              value={input.value}
              label={input.label}
              placeholder={input.placeholder}
            />
          );
        })}

        <ImgInput
          onChange={(value) => handleChange("image", value)}
          name="image"
          label="이미지"
          placeholder="이미지 등록"
        />
      </div>
    </div>
  );
}

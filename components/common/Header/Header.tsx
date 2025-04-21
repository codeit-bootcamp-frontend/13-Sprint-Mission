"use client";

import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getItem, removeItem } from "@/utils/localstorage";
import Button from "../Button/Button";
import { apiClient } from "@/lib/apiClient";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [userId, setUserId] = useState<number | null>(null);

  useEffect(() => {
    const id = getItem<number>("userId");
    setUserId(id);
  }, []);

  const router = useRouter();
  const pathname = usePathname();
  const boardPages = pathname.startsWith("/board");

  const Links = [
    {
      activeLink: boardPages,
      link: "/board",
      name: "자유게시판",
    },
    {
      link: "/items",
      name: "중고마켓",
    },
  ];

  const logout = async () => {
    const res = await apiClient.post("/api/auth/signOut");

    if (res.status !== 200) {
      return;
    }

    router.push("/");

    removeItem("userId");
    removeItem("accessToken");
    setUserId(null);
  };

  return (
    <div className="sticky top-0 z-[100] flex h-[70px] w-full items-center justify-center border-b border-[#dfdfdf] bg-white px-4 py-[9px] sm:px-6">
      <div className="flex w-300 justify-between">
        <div className="flex">
          <Link
            className="mr-4 flex cursor-pointer items-center gap-2"
            href="/"
          >
            <Image
              src="/icons/panda.svg"
              width={40}
              height={40}
              alt="logo"
              priority
              className="hidden sm:block"
            />
            <span className="font-rokaf text-blue text-[25px] font-bold">
              판다마켓
            </span>
          </Link>
          <div className="flex">
            {Links.map((l) => (
              <Link
                className={`text-bold18 flex cursor-pointer items-center justify-center px-2 sm:px-[21px] sm:py-[15px] ${
                  l.activeLink ? "text-blue" : "text-gray600"
                }`}
                key={l.name}
                href={l.link}
              >
                {l.name}
              </Link>
            ))}
          </div>
        </div>
        {userId ? (
          <div
            onClick={() => setIsOpen((prev) => !prev)}
            className="relative flex cursor-pointer justify-center"
          >
            <Image src="/icons/user.svg" width={40} height={40} alt="user" />
            {isOpen && (
              <div
                onClick={logout}
                className="border-gray300 text-regular14 text-gray500 absolute top-15 right-0 w-[102px] cursor-pointer rounded-lg border bg-white p-4 text-center"
              >
                로그아웃
              </div>
            )}
          </div>
        ) : (
          <Link href="/login">
            <Button paddingX={23} paddingY={12} rounded="8" fontSize="16">
              로그인
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}

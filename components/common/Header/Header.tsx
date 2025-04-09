"use client";

import logo from "@/public/icons/panda.svg";
import user from "@/public/icons/user.svg";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const Links = [
    {
      link: "/boards",
      name: "자유게시판",
    },
    {
      link: "/items",
      name: "중고마켓",
    },
  ];

  return (
    <div className="sticky top-0 z-[100] flex h-[70px] w-full items-center justify-center border-b border-[#dfdfdf] bg-white px-4 py-[9px] sm:px-6">
      <div className="flex w-[1200px] justify-between">
        <div className="flex">
          <Link
            className="mr-4 flex cursor-pointer items-center gap-2"
            href="/"
          >
            <Image
              src={logo}
              width={40}
              height={40}
              alt="logo"
              priority
              className="[@media(max-width:480px)]:hidden"
            />
            <span className="font-rokaf text-blue text-[25px] font-bold">
              판다마켓
            </span>
          </Link>
          <div className="flex">
            {Links.map((l) => (
              <Link
                className={`text-bold18 flex cursor-pointer items-center justify-center px-2 sm:px-[21px] sm:py-[15px] ${
                  pathname === l.link ? "text-blue" : "text-gray600"
                }`}
                key={l.name}
                href={l.link}
              >
                {l.name}
              </Link>
            ))}
          </div>
        </div>
        <Image src={user} width={40} height={40} alt="user" />
      </div>
    </div>
  );
}

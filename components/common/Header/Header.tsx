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
    <div className="sticky top-0 z-[100] w-full h-[70px] flex justify-center items-center px-6 py-[9px] bg-white border-b border-[#dfdfdf] md:px-6 sm:px-4 maxS:px-4">
      <div className="w-[1200px] flex justify-between">
        <div className="flex">
          <Link
            className="flex items-center gap-2 mr-4 cursor-pointer"
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
            <span className="font-rokaf text-[25px] font-bold text-blue">
              판다마켓
            </span>
          </Link>
          <div className="flex">
            {Links.map((l) => (
              <Link
                className={`text-Bold18 px-[21px] py-[15px] [@media(max-width:480px)]:px-[8px] cursor-pointer ${
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

import { Metadata } from "next";
import Image from "next/image";
import panda from "@/public/icons/panda.svg";

export const metadata: Metadata = {
  title: "판다마켓 | not found",
};

export default function NotFound() {
  return (
    <div className="w-screen min-h-[calc(100vh-70px)] flex flex-col justify-center items-center gap-10">
      <Image width={280} height={280} src={panda} alt="panda" />
      <p className="text-7xl text-blue font-bold">404 | NOT FOUND</p>
    </div>
  );
}

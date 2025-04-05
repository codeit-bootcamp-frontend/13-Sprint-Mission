import Image from "next/image";
import Link from "next/link";
import panda from "@/public/icons/panda.svg";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="w-[640px] px-4 flex flex-col justify-center items-center gap-10 sm:px-6">
        <Link className="flex items-center gap-5" href="/">
          <Image
            src={panda}
            width={103}
            height={103}
            alt="logo"
            className="[@media(max-width:480px)]:hidden"
          />
          <h1 className="font-rokaf text-[66px] font-bold text-blue">
            판다마켓
          </h1>
        </Link>
        {children}
      </div>
    </div>
  );
}

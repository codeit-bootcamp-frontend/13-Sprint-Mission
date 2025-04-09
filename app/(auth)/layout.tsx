import Image from "next/image";
import Link from "next/link";
import panda from "@/public/icons/panda.svg";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex w-[640px] flex-col items-center justify-center gap-10 px-4 sm:px-6">
        <Link className="flex items-center gap-5" href="/">
          <Image
            src={panda}
            width={103}
            height={103}
            alt="logo"
            className="[@media(max-width:480px)]:hidden"
          />
          <h1 className="font-rokaf text-blue text-[66px] font-bold">
            판다마켓
          </h1>
        </Link>
        {children}
      </div>
    </div>
  );
}

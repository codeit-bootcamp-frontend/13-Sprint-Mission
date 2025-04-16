import Image from "next/image";
import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookie = await cookies();
  const accessToken = cookie.get("accessToken")?.value;

  if (accessToken) {
    redirect("/");
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex w-[640px] flex-col items-center justify-center gap-10 px-4 sm:px-6">
        <Link className="flex items-center gap-5" href="/">
          <Image
            src="/icons/panda.svg"
            width={103}
            height={103}
            alt="logo"
            className="hidden sm:block"
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

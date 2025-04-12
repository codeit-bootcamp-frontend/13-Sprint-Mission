import Header from "@/components/layout/Header";
import { ReactNode } from "react";

type MainLayoutProps = {
  children: ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col gap-6">
      <Header />
      <div>{children}</div>
    </div>
  );
}

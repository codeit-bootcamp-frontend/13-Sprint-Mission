import Header from '@/components/layout/Header';
import { ReactNode } from 'react';

type MainLayoutProps = {
  children: ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col gap-6">
      <Header />
      <main className="px-4 md:px-6 lg:px-[360px]">{children}</main>
    </div>
  );
}

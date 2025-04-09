import Header from "@/components/common/Header/Header";

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      {children}
    </div>
  );
}

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-center">
      <div className="flex max-w-[1200px] min-w-[343px] flex-col gap-10 px-4 py-5 md:p-6">
        {children}
      </div>
    </div>
  );
}

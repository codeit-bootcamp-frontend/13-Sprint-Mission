import Header from "@/components/common/Header/Header";
import { getUserId } from "../lib/getUserId";
import { useUserStore } from "@/store/useUserStore";

export default async function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const userId = await getUserId();

  if (userId) {
    useUserStore.getState().setUserId(userId);
  }

  return (
    <div className="flex h-screen flex-col">
      <Header />
      {children}
    </div>
  );
}

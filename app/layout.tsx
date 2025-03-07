import Header from "@/components/common/Header/Header";
import "./globals.css";

export const metadata = {
  title: "판다마켓",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}

import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "판다마켓",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

export const pretendard = localFont({
  src: "../fonts/PretendardVariable.woff2",
  display: "swap",
  variable: "--font-pre",
});

export const metadata: Metadata = {
  title: "Panda Market",
  description: "Trading site for used goods",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${pretendard.variable}`}>
      <body className={pretendard.className}>{children}</body>
    </html>
  );
}

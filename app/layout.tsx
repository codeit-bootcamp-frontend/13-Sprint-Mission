import Header from "@/components/Header/Header";
import GlobalStyle from "@/styles/global";

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
      <GlobalStyle />
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}

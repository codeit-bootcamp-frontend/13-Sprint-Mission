import Nav from "../components/Nav";
import type { AppProps } from "next/app";
import "../styles/global.css";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Nav />
      <div className="w-full h-screen mx-auto">
        <div className="max-w-[1200px] px-[15px] tablet:px-6 mx-auto h-screen mt-[70px] py-6">
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );

}

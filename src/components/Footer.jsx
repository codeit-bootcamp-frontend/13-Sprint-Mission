import { Link, useNavigate } from "react-router";
import facebook from "@/assets/ic_facebook.svg";
import twitter from "@/assets/ic_twitter.svg";
import youtube from "@/assets/ic_youtube.svg";
import instagram from "@/assets/ic_instagram.svg";

function Footer() {
  return (
    <>
      <footer className="flex h-40 items-start justify-center bg-gray-900 p-8 xl:px-50">
        <div className="flex h-full w-full flex-col-reverse items-start justify-between md:flex-row xl:max-w-480">
          <div className="grow-1 font-normal text-gray-400">
            ©codeit - 2024
          </div>
          <div className="flex w-full grow-1 flex-row items-center justify-between md:w-auto">
            <div className="flex items-center justify-between gap-7.5 font-normal text-gray-200">
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/faq">FAQ</Link>
            </div>
            <div className="flex items-center justify-between gap-3 pl-7.5">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="size-5"
              >
                <img src={facebook} alt="페이스북 페이지 새창으로 열기" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="size-5"
              >
                <img src={twitter} alt="트위터 페이지 새창으로 열기" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="size-5"
              >
                <img src={youtube} alt="유튜브 페이지 새창으로 열기" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="size-5"
              >
                <img src={instagram} alt="인스타그램 페이지 새창으로 열기" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

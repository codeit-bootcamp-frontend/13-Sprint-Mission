import { Link, useNavigate } from "react-router";
import facebook from "@/assets/ic_facebook.svg";
import twitter from "@/assets/ic_twitter.svg";
import youtube from "@/assets/ic_youtube.svg";
import instagram from "@/assets/ic_instagram.svg";

function Footer() {
  return (
    <footer className="flex h-40 w-full items-start justify-center bg-[#111827] pt-8">
      <div className="flex w-480 items-center justify-between px-50 text-[#9CA3AF]">
        <span>©codeit - 2024</span>
        <div className="flex items-center justify-between gap-7.5 text-[#E5E7EB]">
          <Link to="/privacy">Privacy Policy</Link> <Link to="/faq">FAQ</Link>
        </div>
        <div className="flex items-center justify-between gap-3">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebook} alt="페이스북 페이지 새창으로 열기" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitter} alt="트위터 페이지 새창으로 열기" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={youtube} alt="유튜브 페이지 새창으로 열기" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagram} alt="인스타그램 페이지 새창으로 열기" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

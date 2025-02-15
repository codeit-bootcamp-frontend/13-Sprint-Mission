import facebook_ic from "../../../assets/snsLogo/Facebook_ic.svg";
import insta_ic from "../../../assets/snsLogo/Instagram_ic.svg";
import twitter_ic from "../../../assets/snsLogo/Twitter_ic.svg";
import youtube_ic from "../../../assets/snsLogo/Youtube_ic.svg";
//
import useWindowSize from "../../../hooks/useWindowSize";
import { Link } from "react-router-dom";
//
function LandingFooter() {
  const device = useWindowSize();
  return (
    <>
      <div>
        <div>
          <span>@codeit - 2024</span>
          <div>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/faq">faq</Link>
          </div>
        </div>
        <div>
          <a
            href="https://www.facebook.com/?locale=ko_KR"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebook_ic} alt="페이스북 연결링크" />
          </a>
          <a
            href="https://x.com/home?lang=ko"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitter_ic} alt="x 연결링크" />
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={youtube_ic} alt="youtube 연결링크" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={insta_ic} alt="instagram 연결링크" />
          </a>
        </div>
      </div>
    </>
  );
}

export default LandingFooter;

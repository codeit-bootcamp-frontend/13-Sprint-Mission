import logo_sm from "@/assets/logo_sm.svg";
import logo_text from "@/assets/logo_text.svg";
import LogoImage from "@/components/LogoImage";
import ic_profile from "@/assets/ic_profile.svg";
import { Link, useLocation, useNavigate } from "react-router";

function Header() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate("/login");
  };

  return (
    <header className="sticky top-0 flex h-17.5 w-full items-center border-b border-gray-200 bg-white px-4 md:px-6 xl:px-50">
      <div className="flex w-full items-center justify-between xl:max-w-480">
        <Link title="홈으로 이동" to="/">
          <LogoImage small={logo_text} large={logo_sm} />
        </Link>
        {pathname === "/" ? (
          <button
            title="로그인하기"
            onClick={navigateToLogin}
            className="h-12 w-32 cursor-pointer rounded-lg bg-blue-500 font-semibold text-gray-100"
          >
            로그인
          </button>
        ) : (
          <>
            <ul className="ml-2 flex grow-1 items-center justify-start gap-2 font-bold text-gray-600 md:ml-5 md:gap-4.5 md:text-lg xl:ml-8">
              <li>
                <Link
                  className={`${pathname === "/boards" ? "font-extrabold text-blue-500" : ""}`}
                  title="자유게시판으로 이동"
                  to="/boards"
                >
                  자유게시판
                </Link>
              </li>
              <li>
                <Link
                  className={`${pathname === "/items" ? "font-extrabold text-blue-500" : ""}`}
                  title="중고마켓으로 이동"
                  to="/items"
                >
                  중고마켓
                </Link>
              </li>
            </ul>
            <img src={ic_profile} title="내 프로필" alt="내 프로필"></img>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;

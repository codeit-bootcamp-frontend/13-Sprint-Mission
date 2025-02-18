import logo_sm from "@/assets/logo_sm.svg";
import logo from "@/assets/logo.svg";
import { Link, useNavigate } from "react-router";

function Header() {
  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate("/login");
  };

  return (
    <header className="sticky top-0 flex h-17.5 w-full items-center border-b border-gray-200 bg-white px-4 md:px-6 xl:px-50">
      <div className="flex w-full items-center justify-between xl:max-w-480">
        <Link to="/" className="header__button">
          <LogoImage />
        </Link>
        <button
          onClick={navigateToLogin}
          className="h-12 w-32 cursor-pointer rounded-lg bg-blue-500 font-semibold text-gray-100"
        >
          로그인
        </button>
      </div>
    </header>
  );
}

function LogoImage() {
  return (
    <>
      <img src={logo} alt="홈으로 이동" className="block md:hidden" />
      <img src={logo_sm} alt="홈으로 이동" className="hidden md:block" />
    </>
  );
}

export default Header;

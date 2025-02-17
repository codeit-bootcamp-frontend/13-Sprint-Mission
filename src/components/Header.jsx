import logoImage from "@/assets/logo_sm.svg";
import { Link, useNavigate } from "react-router";

function Header() {
  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate("/login");
  };

  return (
    <header className="sticky top-0 flex h-17.5 w-full items-center justify-center border-b border-[#DFDFDF] bg-[#FFFFFF]">
      <div className="flex w-480 items-center justify-between px-50">
        <Link to="/" className="header__button">
          <img src={logoImage} alt="홈으로 이동" />
        </Link>
        <button
          onClick={navigateToLogin}
          className="h-12 w-32 rounded-lg bg-[#3692FF] text-[#F3F4F6]"
        >
          로그인
        </button>
      </div>
    </header>
  );
}

export default Header;

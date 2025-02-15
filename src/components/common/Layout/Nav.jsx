import { Link, NavLink } from "react-router-dom";
import pandaLogo from "../../../assets/Logo/pandaLogo.svg";
import textLogo from "../../../assets/Logo/textLogo.svg";
import myLogo from "../../../assets/icons/myLogo.svg";
import * as S from "./Nav.style.jsx";
import useWindowSize from "../../../hooks/useWindowSize";

export default function Nav() {
  const device = useWindowSize();
  return (
    <div>
      <S.HeaderArea>
        <S.ContentsWrapper>
          <S.Contents>
            <S.NavContents>
              <S.LogoContainer>
                {device !== "mobile" && (
                  <S.PandaImg src={pandaLogo} alt="판다로고" />
                )}
                <S.Logo src={textLogo} alt="판다마켓" />
              </S.LogoContainer>

              <S.NavLinkWrapper>
                <NavLink to="/docs" $device={device} style={S.activeLink}>
                  자유게시판
                </NavLink>
                <NavLink to="/items" $device={device} style={S.activeLink}>
                  중고마켓
                </NavLink>
              </S.NavLinkWrapper>
            </S.NavContents>
            <Link>
              <S.MyLogoButton src={myLogo} />
            </Link>
          </S.Contents>
        </S.ContentsWrapper>
      </S.HeaderArea>
    </div>
  );
}

// import Logo_pandaMarketText from "../../../assets/root_img/Logo_PandaMarketText.svg";
// import Button from "../Button/Button.jsx";
// import { Link } from "react-router-dom";
// import * as S from "./Nav.style.jsx";

// //
// function LandingNav() {
//   return (
//     <S.NavArea>
//       <S.Contents>
//         <Link to="./">
//           <S.Logo src={Logo_pandaMarketText} alt="판다로고" />
//         </Link>

//         <Link to="./login">
//           <Button>로그인</Button>
//         </Link>
//       </S.Contents>
//     </S.NavArea>
//   );
// }

// export default LandingNav;

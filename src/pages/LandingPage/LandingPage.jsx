import pandaImg1 from "../../assets/Logo/Panda_Top_Img.svg";
import pandaImg2 from "../../assets/Logo/Panda_Bottom_Img.svg";
//
import Nav from "../../components/common/Layout/Nav";
import Card from "../../components/Card/Card";
import LandingFooter from "../../components/common/Layout/LandingFooter";
import useWindowSize from "../../hooks/useWindowSize";
import Button from "../../components/common/Button/Button";
import { Link } from "react-router-dom";

function LandingPage() {
  const device = useWindowSize();
  return (
    <>
      <Nav />
      <div>
        <div>
          <div>
            <p>일상의 모든 물건을 거래해 보세요</p>
            <Link to="./itmes">
              <Button>구경하러 가기 </Button>
            </Link>
          </div>
          <img src={pandaImg1} alt="판다마켓 이미지" />
        </div>
      </div>
      <Card value="hotitem" />
      <Card value="search" />
      <Card value="register" />
      <div>
        <div>
          <div>
            <div>
              믿을 수 있는
              <br />
              판다마켓 중고 거래
            </div>
            <img src={pandaImg2} alt="판다마켓 하단 이미지" />
          </div>
        </div>
      </div>
      <LandingFooter />
    </>
  );
}

export default LandingPage;

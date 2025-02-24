import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { validEmail, validPassword } from "../../utils/validation";
import PrimaryButton from "../../components/UI/PrimaryButton";
import LogoImg from "../../assets/logo/panda-market-logo.svg";
import VisibilityOff from "../../assets/icon/visibility_off.svg";
import VisibilityOn from "../../assets/icon/visibility_on.svg";
import GoogleIcon from "../../assets/icon/ic_google.svg";
import KakaoIcon from "../../assets/icon/ic_kakao.svg";
import styles from "./LoginPage.module.css";

function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isValid, setIsValid] = useState({
    email: true,
    password: true,
  });
  const [isFilled, setIsFilled] = useState({
    email: true,
    password: true,
  });
  const [isVisible, setIsVisible] = useState({
    password: false,
  });
  const [isLoginAvailable, setIsLoginAvailable] = useState(false);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));

    const updateValidationState = (id, value, validFunc) => {
      setIsFilled((prev) => ({
        ...prev,
        [id]: value.length > 0,
      }));
      setIsValid((prev) => ({
        ...prev,
        [id]: value.length === 0 || validFunc(value),
      }));
    };

    if (id === "email") {
      updateValidationState("email", value, validEmail);
    }

    if (id === "password") {
      updateValidationState("password", value, validPassword);
    }
  };

  const handlePasswordVisible = (event) => {
    const { name } = event.currentTarget;

    setIsVisible((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const handleLogin = (e) => {
    if (!isLoginAvailable) {
      e.preventDefault();
      return;
    }
    navigate("/items");
  };

  useEffect(() => {
    setIsLoginAvailable(
      validEmail(formData.email) && validPassword(formData.password)
    );
  }, [formData]);

  return (
    <div className={styles.container}>
      <Link to="/">
        <img src={LogoImg} className={styles.logoImg} alt="판다마켓 홈" />
      </Link>
      <form className={styles.formSection}>
        <label>
          이메일
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className={
              !(isFilled.email && isValid.email) ? styles.cautionInput : ""
            }
            placeholder="이메일을 입력해주세요"
          />
          {isFilled.email ? (
            ""
          ) : (
            <div className={styles.cautionText}>이메일을 입력해주세요.</div>
          )}
          {isValid.email ? (
            ""
          ) : (
            <div className={styles.cautionText}>잘못된 이메일 형식입니다.</div>
          )}
        </label>
        <label className={styles.passwordInput}>
          비밀번호
          <input
            type={isVisible.password ? "text" : "password"}
            id="password"
            value={formData.password}
            onChange={handleChange}
            className={
              !(isFilled.password && isValid.password)
                ? styles.cautionInput
                : ""
            }
            placeholder="비밀번호를 입력해주세요"
          />
          <button type="button" name="password" onClick={handlePasswordVisible}>
            <img
              src={isVisible.password ? VisibilityOn : VisibilityOff}
              className={styles.visibleIcon}
              alt=""
            />
          </button>
          {isFilled.password ? (
            ""
          ) : (
            <div className={styles.cautionText}>비밀번호를 입력해주세요.</div>
          )}
          {isValid.password ? (
            ""
          ) : (
            <div className={styles.cautionText}>
              비밀번호를 8자 이상 입력해주세요.
            </div>
          )}
        </label>
        <PrimaryButton
          type="submit"
          onClick={handleLogin}
          className={styles.loginButton}
          disabled={!isLoginAvailable}
        >
          로그인
        </PrimaryButton>
        <div className={styles.socialLoginSection}>
          <div className={styles.socialLoginText}>간편 로그인하기</div>
          <ul className={styles.socialLoginList}>
            <li className={styles.googleIcon}>
              <Link to="https://www.google.com/">
                <img src={GoogleIcon} width="22" alt="구글" />
              </Link>
            </li>
            <li className={styles.kakaoIcon}>
              <Link to="https://www.kakaocorp.com/page/">
                <img src={KakaoIcon} width="22" alt="카카오톡" />
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.signupSection}>
          판다마켓이 처음이신가요?
          <Link to="/signup" className={styles.signupLink}>
            회원가입
          </Link>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;

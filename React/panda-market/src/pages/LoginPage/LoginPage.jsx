import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
  const [isVisible, setIsVisible] = useState(false);
  const [isLoginAvailable, setIsLoginAvailable] = useState(false);

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleBlur = (event) => {
    const { id, value } = event.target;

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

  const handlePasswordVisible = () => {
    setIsVisible(!isVisible);
  };

  useEffect(() => {
    const isAllValid = isValid.email && isValid.password;
    const isAllFilled = isFilled.email && isFilled.password;

    setIsLoginAvailable(
      isAllValid &&
        isAllFilled &&
        formData.email.length > 0 &&
        formData.password.length > 0
    );
  }, [isValid, isFilled, formData]);

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
            onBlur={handleBlur}
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
            type={isVisible ? "text" : "password"}
            id="password"
            value={formData.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={
              !(isFilled.password && isValid.password)
                ? styles.cautionInput
                : ""
            }
            placeholder="비밀번호를 입력해주세요"
          />
          <button type="button">
            <img
              src={isVisible ? VisibilityOn : VisibilityOff}
              className={styles.visibleIcon}
              onClick={handlePasswordVisible}
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
        <Link to="/items">
          <PrimaryButton
            type="submit"
            className={styles.loginButton}
            disabled={!isLoginAvailable}
          >
            로그인
          </PrimaryButton>
        </Link>
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
          <Link to="signup" className={styles.signupLink}>
            회원가입
          </Link>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;

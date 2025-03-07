import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  validEmail,
  validPassword,
  matchPassword,
} from "../../utils/validation";
import PrimaryButton from "../../components/UI/PrimaryButton";
import LogoImg from "../../assets/logo/panda-market-logo.svg";
import VisibilityOff from "../../assets/icon/visibility_off.svg";
import VisibilityOn from "../../assets/icon/visibility_on.svg";
import GoogleIcon from "../../assets/icon/ic_google.svg";
import KakaoIcon from "../../assets/icon/ic_kakao.svg";
import styles from "./SignupPage.module.css";

function SignupPage() {
  const [formData, setFormData] = useState({
    email: "",
    nickname: "",
    password: "",
    passwordCheck: "",
  });
  const [isValid, setIsValid] = useState({
    email: true,
    nickname: true,
    password: true,
    passwordCheck: true,
  });
  const [isFilled, setIsFilled] = useState({
    email: true,
    nickname: true,
    password: true,
    passwordCheck: true,
  });
  const [isVisible, setIsVisible] = useState({
    password: false,
    passwordCheck: false,
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

    if (id === "nickname") {
      updateValidationState("nickname", value, () => true);
    }

    if (id === "password") {
      updateValidationState("password", value, validPassword);
    }

    if (id === "passwordCheck") {
      updateValidationState("passwordCheck", value, (value) =>
        matchPassword(formData.password, value)
      );
    }
  };

  const handlePasswordVisible = (event) => {
    const { name } = event.currentTarget;

    setIsVisible((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const handleSignup = (e) => {
    if (!isLoginAvailable) {
      e.preventDefault();
      return;
    }
    navigate("/login");
  };

  useEffect(() => {
    setIsLoginAvailable(
      validEmail(formData.email) &&
        formData.nickname.length > 0 &&
        validPassword(formData.password) &&
        matchPassword(formData.password, formData.passwordCheck)
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
              !(isFilled.email && isValid.email) && styles.cautionInput
            }
            placeholder="이메일을 입력해주세요"
          />
          {!isFilled.email && (
            <div className={styles.cautionText}>이메일을 입력해주세요.</div>
          )}
          {!isValid.email && (
            <div className={styles.cautionText}>잘못된 이메일 형식입니다.</div>
          )}
        </label>
        <label>
          닉네임
          <input
            type="text"
            id="nickname"
            value={formData.nickname}
            onChange={handleChange}
            className={!isFilled.nickname && styles.cautionInput}
            placeholder="닉네임을 입력해주세요"
          />
          {!isFilled.nickname && (
            <div className={styles.cautionText}>닉네임을 입력해주세요.</div>
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
              !(isFilled.password && isValid.password) && styles.cautionInput
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
          {!isFilled.password && (
            <div className={styles.cautionText}>비밀번호를 입력해주세요.</div>
          )}
          {!isValid.password && (
            <div className={styles.cautionText}>
              비밀번호를 8자 이상 입력해주세요.
            </div>
          )}
        </label>
        <label className={styles.passwordInput}>
          비밀번호 확인
          <input
            type={isVisible.passwordCheck ? "text" : "password"}
            id="passwordCheck"
            value={formData.passwordCheck}
            onChange={handleChange}
            className={!isValid.passwordCheck && styles.cautionInput}
            placeholder="비밀번호를 다시 한 번 입력해주세요"
          />
          <button
            type="button"
            name="passwordCheck"
            onClick={handlePasswordVisible}
          >
            <img
              src={isVisible.passwordCheck ? VisibilityOn : VisibilityOff}
              className={styles.visibleIcon}
              alt=""
            />
          </button>
          {!isValid.passwordCheck && (
            <div className={styles.cautionText}>
              비밀번호가 일치하지 않습니다.
            </div>
          )}
        </label>
        <PrimaryButton
          type="submit"
          onClick={handleSignup}
          className={styles.loginButton}
          disabled={!isLoginAvailable}
        >
          회원가입
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
        <div className={styles.loginSection}>
          이미 회원이신가요?
          <Link to="/login" className={styles.loginLink}>
            로그인
          </Link>
        </div>
      </form>
    </div>
  );
}

export default SignupPage;

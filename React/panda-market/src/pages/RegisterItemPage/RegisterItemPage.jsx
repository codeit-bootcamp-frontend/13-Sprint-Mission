import { useState, useEffect } from "react";
import DeleteIcon from "../../assets/icon/ic_delete.svg";
import styles from "./RegisterItemPage.module.css";

function RegisterItemPage() {
  const [registerAvailable, setRegisterAvailable] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    tag: "",
  });
  const [tagValues, setTagValues] = useState([]);

  const handleRegister = async (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleAddTag = (event) => {
    if (event.key === "Enter" && formData.tag !== "") {
      setTagValues((prev) => [...prev, formData.tag]);
      setFormData((prev) => ({
        ...prev,
        tag: "",
      }));
    }
  };

  const handleDeleteTag = (index) => {
    setTagValues((prev) => prev.filter((_, i) => i !== index));
  };

  useEffect(() => {
    const { name, description, price, tag } = formData;
    if (name && description && price && tag) {
      setRegisterAvailable(true);
    } else {
      setRegisterAvailable(false);
    }
  }, [formData]);

  return (
    <form className={styles.container} onSubmit={handleRegister}>
      <div className={styles.topSection}>
        <h1 className={styles.title}>상품 등록하기</h1>
        <button
          type="submit"
          className={styles.registerButton}
          disabled={!registerAvailable}
        >
          등록
        </button>
      </div>
      <div className={styles.itemFormSection}>
        <div className={styles.infoInputSection}>
          <h2 className={styles.title}>상품 이미지</h2>
        </div>
        <div className={styles.infoInputSection}>
          <h2 className={styles.title}>상품명</h2>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="상품명을 입력해주세요"
          />
        </div>
        <div className={styles.infoInputSection}>
          <h2 className={styles.title}>상품 소개</h2>
          <textarea
            id="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="상품 소개를 입력해주세요"
          />
        </div>
        <div className={styles.infoInputSection}>
          <h2 className={styles.title}>판매가격</h2>
          <input
            type="text"
            id="price"
            value={formData.price}
            onChange={handleChange}
            onInput={(e) =>
              (e.target.value = e.target.value.replace(/\D/g, ""))
            } // 입력된 값이 숫자가 아닐 시 제거
            placeholder="판매 가격을 입력해주세요"
          />
        </div>
        <div className={styles.infoInputSection}>
          <h2 className={styles.title}>태그</h2>
          <input
            type="text"
            id="tag"
            value={formData.tag}
            onChange={handleChange}
            onKeyDown={handleAddTag}
            placeholder="태그를 입력해주세요"
          />
          <div className={styles.tags}>
            {tagValues.map((value, index) => (
              <div key={index} className={styles.tag}>
                #{value}
                <button type="button" onClick={() => handleDeleteTag(index)}>
                  <img
                    src={DeleteIcon}
                    alt="삭제"
                    className={styles.deleteButton}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </form>
  );
}

export default RegisterItemPage;

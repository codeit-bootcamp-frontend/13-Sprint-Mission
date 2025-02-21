import { useState, useEffect } from "react";
import PrimaryButton from "../../components/UI/PrimaryButton";
import ImageUploader from "./components/ImageUploader";
import DeleteButton from "../../components/UI/DeleteButton";
import styles from "./RegisterItemPage.module.css";

function RegisterItemPage() {
  const [registerAvailable, setRegisterAvailable] = useState(false);
  const [itemImg, setItemImg] = useState(null);
  const [tagValues, setTagValues] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    tag: "",
  });

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
    const { name, description, price } = formData;
    if (
      itemImg !== null &&
      name &&
      description &&
      price &&
      tagValues.length !== 0
    ) {
      setRegisterAvailable(true);
    } else {
      setRegisterAvailable(false);
    }
  }, [itemImg, tagValues, formData]);

  return (
    <form className={styles.container} onSubmit={handleRegister}>
      <div className={styles.topSection}>
        <h1 className={styles.title}>상품 등록하기</h1>
        <PrimaryButton
          type="submit"
          className={styles.registerButton}
          disabled={!registerAvailable}
        >
          등록
        </PrimaryButton>
      </div>
      <div className={styles.itemFormSection}>
        <div className={styles.infoInputSection}>
          <h2 className={styles.title}>상품 이미지</h2>
          <ImageUploader itemImg={itemImg} setItemImg={setItemImg} />
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
                <div className={styles.tagName}>#{value}</div>
                <DeleteButton onClick={() => handleDeleteTag(index)} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </form>
  );
}

export default RegisterItemPage;

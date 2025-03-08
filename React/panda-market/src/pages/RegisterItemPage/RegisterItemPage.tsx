import {
  useState,
  useEffect,
  FormEvent,
  ChangeEvent,
  KeyboardEvent,
} from "react";
import PrimaryButton from "../../components/UI/PrimaryButton";
import ImageUploader from "./components/ImageUploader";
import DeleteButton from "../../components/UI/DeleteButton";
import styles from "./RegisterItemPage.module.css";

function RegisterItemPage() {
  const [registerAvailable, setRegisterAvailable] = useState(false);
  const [itemImg, setItemImg] = useState<string | null>(null);
  const [tagValues, setTagValues] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    tag: "",
  });

  const handleRegister = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [id]: id === "price" ? value.replace(/\D/g, "") : value,
    }));
  };

  const handleAddTag = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && formData.tag !== "") {
      setTagValues((prev) => [...prev, formData.tag]);
      setFormData((prev) => ({
        ...prev,
        tag: "",
      }));
    }
  };

  const handleDeleteTag = (index: number) => {
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
        <label>
          상품명
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="상품명을 입력해주세요"
          />
        </label>
        <label>
          상품 소개
          <textarea
            id="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="상품 소개를 입력해주세요"
          />
        </label>
        <label>
          판매가격
          <input
            type="text"
            id="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="판매 가격을 입력해주세요"
          />
        </label>
        <label>
          태그
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
        </label>
      </div>
    </form>
  );
}

export default RegisterItemPage;

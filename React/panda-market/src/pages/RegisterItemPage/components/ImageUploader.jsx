import { useState, useRef } from "react";
import PrusIcon from "../../../assets/icon/ic_plus.svg";
import DeleteIcon from "../../../assets/icon/ic_delete.svg";
import styles from "./ImageUploader.module.css";

function ImageUpload() {
  const [itemImg, setItemImg] = useState(null);
  const [fileError, setFileError] = useState("");
  const fileInputRef = useRef(null);

  const handleFileButtonClick = () => {
    if (!fileInputRef.current) return;
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const files = event.target.files;

    if (!files) {
      return;
    }

    if (files.length > 1) {
      setFileError("*이미지 등록은 최대 1개까지 가능합니다.");
      return;
    }

    setFileError("");
    setItemImg(URL.createObjectURL(files[0]));
  };

  const handleDeleteFile = () => {
    setItemImg(null);
    setFileError("");
    fileInputRef.current.value = "";
  };

  return (
    <div className={styles.container}>
      <div className={styles.imgSectionContainer}>
        <button
          type="button"
          className={styles.imgAddButton}
          onClick={handleFileButtonClick}
        >
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleFileChange}
            accept=".jpeg, .jpg, .png"
            multiple
          />
          <div className={styles.imgAddButtonContent}>
            <div>
              <img src={PrusIcon} alt="" />
            </div>
            <div className={styles.imgAddButtonText}>이미지 등록</div>
          </div>
        </button>
        {itemImg && (
          <div className={styles.imgPreview}>
            <img src={itemImg} alt="상품 이미지 미리보기" />
            <button type="button">
              <img
                src={DeleteIcon}
                alt=""
                className={styles.deleteButton}
                onClick={handleDeleteFile}
              />
            </button>
          </div>
        )}
      </div>
      {fileError && <div className={styles.errorMessage}>{fileError}</div>}
    </div>
  );
}

export default ImageUpload;

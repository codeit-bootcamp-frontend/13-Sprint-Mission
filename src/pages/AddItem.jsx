import Header from "@/components/Header";
import InputField from "@/components/InputField";
import { ITEM_REGISTRATION } from "@/constants/formFields";
import { useState } from "react";
import ic_plus from "@/assets/ic_plus.svg";
import ic_close from "@/assets/ic_close.svg";
import TextField from "@/components/TextField";

const item = {
  images: [],
  tags: [],
  price: 0,
  description: "",
  name: "",
};

function AddItem() {
  const [formData, setFormData] = useState({ ...item });
  const [image, setImage] = useState(null);
  const [tags, setTags] = useState([]);
  const [canSubmit, setCanSubmit] = useState(false);
  const [currentTag, setCurrentTag] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const addTag = (tag) => {
    if (tags.includes(tag)) return;
    setTags((prev) => [...prev, tag]);
  };

  const deleteTag = (tagToDelete) => {
    setTags((prev) => prev.filter((tag) => tag !== tagToDelete));
  };

  return (
    <>
      <Header />
      <main className="m-auto px-4 pb-8 xl:max-w-480">
        <form action="">
          <div className="my-6 flex items-center justify-between">
            <div className="text-xl font-bold text-gray-800">상품 등록하기</div>
            <button
              type="submit"
              className={`rounded-lg px-6 py-3 font-semibold text-white ${canSubmit ? "cursor-pointer bg-blue-500" : "cursor-not-allowed bg-gray-400"} `}
              disabled={!canSubmit}
            >
              등록
            </button>
          </div>
          <div className="flex flex-col gap-6">
            <div>
              <div className="mb-4 text-lg font-bold text-gray-800">
                상품 이미지
              </div>
              {image === null ? (
                <>
                  <label
                    htmlFor="file-input"
                    className="flex size-42 cursor-pointer flex-col items-center justify-center gap-2.5 rounded-xl bg-gray-100 font-normal text-gray-400"
                  >
                    <img src={ic_plus} className="size-12" />
                    이미지 업로드
                  </label>
                  <input
                    id="file-input"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                </>
              ) : (
                <div className="relative size-42">
                  <button type="button" className={`absolute top-3 right-3`}>
                    <img
                      src={ic_close}
                      alt="X"
                      className="cursor-pointer"
                      onClick={() => {
                        setImage(null);
                      }}
                    />
                  </button>
                  <img
                    src={URL.createObjectURL(image)}
                    alt="미리보기"
                    className="aspect-square rounded-xl object-cover"
                  />
                </div>
              )}
            </div>
            {Object.entries(ITEM_REGISTRATION).map(([key, value]) =>
              key === "explanation" ? (
                <TextField
                  key={key}
                  name={value.id}
                  // onChange={handleFieldChange}
                  // onBlur={handleFieldBlur}
                  // hasValue={isFieldFilled[name]}
                  // isValidated={isFieldValidated[name]}
                  // value={formData[name]}
                  {...value}
                />
              ) : key === "tag" ? (
                <InputField
                  key={key}
                  name={value.id}
                  onChange={(name, e) => {
                    setCurrentTag(e.target.value);
                  }}
                  // onBlur={handleFieldBlur}
                  // hasValue={isFieldFilled[name]}
                  // isValidated={isFieldValidated[name]}
                  value={currentTag}
                  {...value}
                  onEnterKeyDown={addTag}
                />
              ) : null,
            )}
            <div className="-mt-3 flex justify-start gap-3">
              {tags.map((tag) => (
                <div
                  key={tag}
                  className="flex gap-2 rounded-full bg-gray-100 py-1.5 pr-3 pl-4 font-normal"
                >
                  <div>{`#${tag}`}</div>
                  <button
                    className="cursor-pointer"
                    onClick={() => deleteTag(tag)}
                  >
                    <img src={ic_close} alt="" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </form>
      </main>
    </>
  );
}

export default AddItem;

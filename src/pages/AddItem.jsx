import InputField from "@/components/InputField";
import { ITEM_REGISTRATION } from "@/constants/formFields";
import { useState } from "react";
import ic_plus from "@/assets/ic_plus.svg";
import ic_close from "@/assets/ic_close.svg";
import TextField from "@/components/TextField";
import AddItemInputField from "@/components/AddItemInputField";
import { uploadImage, postItem } from "@/api/api";

const item = {
  images: [],
  tags: [],
  price: 0,
  description: "",
  name: "",
};

function AddItem() {
  const [formData, setFormData] = useState({ ...item });
  const [canSubmit, setCanSubmit] = useState(false);
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [currentTag, setCurrentTag] = useState("");
  const [tagList, setTagList] = useState([]);
  const [isFieldFilled, setIsFieldFilled] = useState({
    images: false,
    tags: false,
    price: false,
    description: false,
    name: false,
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setImage(file);

      setIsFieldFilled((prev) => ({ ...prev, images: true }));
    }
  };

  const addTag = (tag) => {
    if (tagList.includes(tag)) return;
    setTagList((prev) => [...prev, tag]);
  };

  const deleteTag = (tagToDelete) => {
    setTagList((prev) => prev.filter((tag) => tag !== tagToDelete));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const res = postItem({
    //   images: image,
    //   tags: tagList,
    //   price: price,
    //   description: description,
    //   name: name,
    // });
    /*
    API를 통한 상품 등록은 추후 미션에서 적용합니다.
    */
  };

  return (
    <div className="m-auto px-4 pb-8 xl:max-w-480">
      <form onSubmit={handleSubmit}>
        <div className="my-6 flex items-center justify-between">
          <div className="text-xl font-bold text-gray-800">상품 등록하기</div>
          <button
            type="submit"
            className={`rounded-lg px-6 py-3 font-semibold text-white ${Object.values(isFieldFilled).every((filled) => filled) ? "cursor-pointer bg-blue-500" : "cursor-not-allowed bg-gray-400"} `}
            disabled={!Object.values(isFieldFilled).every((filled) => filled)}
          >
            등록
          </button>
        </div>
        <div className="flex flex-col gap-6">
          <div>
            <div className="mb-4 text-lg font-bold text-gray-800">
              상품 이미지
            </div>
            <button
              type="button"
              onClick={() => {
                const handleSubmit = async () => {
                  const imageUrl = await uploadImage();
                };
                handleSubmit();
              }}
            >
              전송하기
            </button>
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
          <AddItemInputField
            key={"name"}
            name={ITEM_REGISTRATION.name.id}
            {...ITEM_REGISTRATION.name}
            value={name}
            setValue={setName}
            onBlur={() =>
              setIsFieldFilled((prev) =>
                name !== ""
                  ? { ...prev, name: true }
                  : { ...prev, name: false },
              )
            }
          />
          <TextField
            key={"description"}
            name={ITEM_REGISTRATION.description.id}
            {...ITEM_REGISTRATION.description}
            value={description}
            setValue={setDescription}
            onBlur={() =>
              setIsFieldFilled((prev) =>
                price !== ""
                  ? { ...prev, description: true }
                  : { ...prev, description: false },
              )
            }
          />
          <AddItemInputField
            key={"price"}
            name={ITEM_REGISTRATION.price.id}
            {...ITEM_REGISTRATION.price}
            value={price}
            setValue={setPrice}
            onBlur={() =>
              setIsFieldFilled((prev) =>
                price !== ""
                  ? { ...prev, price: true }
                  : { ...prev, price: false },
              )
            }
          />
          <AddItemInputField
            key={"tag"}
            name={ITEM_REGISTRATION.tag.id}
            {...ITEM_REGISTRATION.tag}
            value={currentTag}
            setValue={setCurrentTag}
            onEnterKeyDown={() => addTag(currentTag)}
            onBlur={() =>
              setIsFieldFilled((prev) =>
                tagList.length !== 0
                  ? { ...prev, tags: true }
                  : { ...prev, tags: false },
              )
            }
          />
          <div className="-mt-3 flex justify-start gap-3">
            {tagList.map((tag) => (
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
    </div>
  );
}

export default AddItem;

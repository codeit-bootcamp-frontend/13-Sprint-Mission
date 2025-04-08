import PlusIcon from "@/public/assets/icons/plusIcon.svg";
import DeleteIcon from "@/public/assets/icons/DeleteIcon.svg";
import SearchIcon from "@/public/assets/icons/search.icon.svg";
import Image from "next/image";
import { useRef, useState } from "react";
import { uploadImage } from "@/lib/image";
import { renameFile } from "@/hooks/useRenameFile";
//

interface Props {
  onChange: (value: string) => void;
  label?: string;
  placeholder?: string;
  name: string;
  tag?: boolean;
  value?: string;
  $comment?: boolean;
  $textArea?: boolean;
  $edit?: boolean;
  onKeyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  type?: "text" | "number";
  isAsterisk?: boolean;
}

export function Input({
  onChange,
  placeholder,
  type = "text",
  isAsterisk,
  ...props
}: Props) {
  const { label, onKeyUp, $edit, $textArea, $comment } = props;

  return (
    <div className="flex flex-col justify-start w-full gap-4">
      <div
        className={`${label ? "block" : "none"} ${
          $comment && "text-H5Bold"
        } w-full h-[26px] font-Pretendard text-gray-800 text-H4Bold`}
      >
        {isAsterisk && <span>*</span>}
        {label}
      </div>
      <input
        className={`${$textArea && "h-[282px]"} ${
          $comment && "text-H7Regular h-[104px] mobile:h-[129px] "
        } ${
          $edit && "text-H7Regular h-[80px]"
        }relative w-full h-[56px] bg-gray-100 font-Pretendard text-H6Regular border-none rounded-xl text-gray-800 px-4 py-6 placeholder-gray-400 placeholder:text-H5Regular placeholder:absolute focus:outline-none`}
        type={type}
        onChange={(e) => {
          if (e.nativeEvent.composed) return onChange(e.target.value);
        }}
        onKeyUp={onKeyUp || undefined}
        placeholder={placeholder}
      />
    </div>
  );
}

//
interface ImgProps extends Omit<Props, "onChange"> {
  onChange: (value: null | string) => void;
}
export function ImgInput({ onChange, label, ...props }: ImgProps) {
  const imgRef = useRef<HTMLInputElement>(null);
  const [imgPreview, setImgPreview] = useState<string>("");

  const handlePreviewImg = () => {
    if (!imgRef.current || !imgRef.current.files?.length) return;
    const file = imgRef.current.files[0];

    const renamedFile = renameFile(file);

    const reader = new FileReader();
    reader.readAsDataURL(renamedFile);

    reader.onloadend = async () => {
      if (typeof reader.result === "string") {
        setImgPreview(reader.result);
        const formattedImage = await uploadImage(renamedFile);
        onChange(formattedImage);
      }
    };
  };

  const handleClickImgDelete = () => {
    setImgPreview("");
    onChange(null);
  };

  return (
    <div className="flex flex-col gap-6 mobile:gap-[10px] ">
      <p className="text-[18px] font-Pretendard text-H4Bold">{label}</p>
      <div className="relative overflow-hidden gap-6 w-[282px] mobile:w-[168px] mobile:h-[168px] h-[282px] bg-gray-100 rounded-xl  border-none text-gray-800">
        {!imgPreview ? (
          <>
            <input
              className="hidden w-full h-full  font-Pretendard text-H6Regular border-none rounded-xl text-gray-800 px-4 py-6 
          placeholder-gray-400 placeholder:text-H5Regular placeholder:top-[10px] placeholder:text-left placeholder:absolute focus:outline-none"
              type="file"
              id="fileUpload"
              accept="image/*"
              ref={imgRef}
              onChange={handlePreviewImg}
              {...props}
            />
            <label
              htmlFor="fileUpload"
              className="absolute flex flex-col items-center justify-center text-gray-400 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 text-H5Regular"
            >
              <Image width={48} height={48} src={PlusIcon} alt="추가" />
              <p className="text-center">{props.placeholder}</p>
            </label>
          </>
        ) : (
          <div className="relative">
            <img
              className="z-10 w-full rounded-[6px] object-fill aspect-square"
              src={imgPreview}
              alt="이미지 미리보기"
            />
            <Image
              className="absolute top-[15px] right-[15px]"
              src={DeleteIcon}
              width={22}
              height={24}
              alt="x"
              onClick={handleClickImgDelete}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export function SearchInput({ onChange, ...props }: Props) {
  return (
    <div className="relative w-full">
      <input
        onChange={(e) => {
          onChange(e.target.value);
        }}
        className=" 
      rounded-xl border-none px-[44px] py-[16px] w-full h-[42px] bg-gray-100 
      font-Pretendard text-gray-800 text-H5Regular
      placeholder:text-H5Regular placeholder:text-gray-400
      "
      />
      <Image
        className="absolute translate-x-0 left-4 top-1/2 -translate-y-2/4"
        src={SearchIcon}
        alt="검색"
        width={15}
        height={15}
      />
    </div>
  );
}

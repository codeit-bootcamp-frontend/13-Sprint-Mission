import PlusIcon from "@/public/assets/icons/plusIcon.svg";
import DeleteIcon from "@/public/assets/icons/DeleteIcon.svg";
import SearchIcon from "@/public/assets/icons/search.icon.svg";
import Image from "next/image";
import { ChangeEvent, useRef, useState } from "react";
//

interface Props {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
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
}
export function Input({ onChange, type = "text", ...props }: Props) {
  const { label, onKeyUp, $edit, $textArea, $comment } = props;

  return (
    <div className="flex flex-col justify-start w-full gap-4">
      <div
        className={`${label ? "block" : "none"} ${
          $comment && "text-H5Bold"
        } w-full h-[26px] font-Pretendard text-gray-800 text-H4Bold`}
      >
        {label}
      </div>
      <input
        className={`${$textArea && "h-[282px]"} ${
          $comment && "text-H7Regular h-[104px] mobile:h-[129px] "
        } ${
          $edit && "text-H7Regular h-[80px]"
        }relative w-full h-[56px] bg-gray-100 font-Pretendard text-H6Regular border-none rounded-xl text-gray-800 px-4 py-6 placeholder-gray-400 placeholder:text-H5Regular placeholder:absolute focus:outline-none`}
        type={type}
        onChange={onChange}
        onKeyUp={onKeyUp || undefined}
      />
    </div>
  );
}
//
interface ImgProps extends Omit<Props, "onChange"> {
  onChange: (value: File | string) => void;
}
export function ImgInput({ onChange, ...props }: ImgProps) {
  const imgRef = useRef<HTMLInputElement>(null);
  const [imgPreview, setImgPreview] = useState<string>("");

  const handlePreviewImg = () => {
    if (!imgRef.current || !imgRef.current.files?.length) return;
    const file = imgRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      if (typeof reader.result === "string") {
        setImgPreview(reader.result);
        onChange(file);
      }
    };
  };
  //
  const handleClickImgDelete = () => {
    setImgPreview("");
    onChange("");
  };
  return (
    <div className="flex gap-6 mobile:gap-[10px] ">
      <div className="mobile:w-[168px]  w-[282px] h-[282px] bg-gray-100 rounded-xl  border-none text-gray-800">
        <input
          className="relative w-full h-full bg-gray-100 font-Pretendard text-H6Regular border-none rounded-xl text-gray-800 px-4 py-6 
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
          className="absolute text-center text-gray-400 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 text-H5Regular"
        >
          <Image width={48} height={48} src={PlusIcon} alt="추가" />
          <p>{props.placeholder}</p>
        </label>
      </div>

      {imgPreview && (
        <div className="relative">
          <Image
            className=" aspect-square w-[282px] h-[282px] mobile:w-[168px] "
            src={imgPreview}
            width={282}
            height={282}
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
  );
}

export function SearchInput({ onChange, ...props }: Props) {
  return (
    <div className="relative w-full">
      <input
        onChange={onChange}
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

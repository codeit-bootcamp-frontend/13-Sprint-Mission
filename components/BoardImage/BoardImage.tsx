import Image from "next/image";
import none from "@/public/icons/whitePanda.svg";
import { useState } from "react";

export default function BoardImage({ image }: { image: string }) {
  const [isError, setIsError] = useState<boolean>(false);

  return (
    <div className="relative flex justify-center items-center w-[72px] h-[72px] bg-white border border-solid border-gray200 rounded-md">
      {image && !isError ? (
        <Image
          fill
          src={image}
          alt="image"
          className="rounded-md"
          onError={() => setIsError(true)}
        />
      ) : (
        <Image width={48} height={48} src={none} alt="none" />
      )}
    </div>
  );
}

import Image from "next/image";
import { useState } from "react";

export default function BoardImage({ image }: { image: string }) {
  const [isError, setIsError] = useState<boolean>(false);

  return (
    <div className="border-gray200 relative flex h-[72px] w-[72px] items-center justify-center rounded-md border border-solid bg-white">
      {image && !isError ? (
        <Image
          fill
          src={image}
          alt="image"
          className="rounded-md"
          onError={() => setIsError(true)}
        />
      ) : (
        <Image src="/icons/whitePanda.svg" width={48} height={48} alt="none" />
      )}
    </div>
  );
}

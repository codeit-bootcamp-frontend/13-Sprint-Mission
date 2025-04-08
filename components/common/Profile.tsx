import Image from "next/image";
import ProfileImg from "@/public/assets/icons/default.profile.icon.svg";
import { useFormatDate, useFormatUpDate } from "@/hooks/useFormatting";
import clsx from "clsx";
interface Props {
  value: {
    writer: { nickname: string };
    createdAt: string;
  };
  isComment?: boolean;
}
export default function Profile({ value, isComment }: Props) {
  const formattedDate = isComment
    ? useFormatUpDate(value.createdAt)
    : useFormatDate(value.createdAt);

  return (
    <div className="flex gap-2">
      <Image src={ProfileImg} width={24} height={24} alt="프로필" />
      <div className={clsx("flex", isComment ? "flex-col gap-1" : "flex-row")}>
        <div className="text-gray-600">{value.writer?.nickname}</div>
        <p className="text-gray-400">{formattedDate}</p>
      </div>
    </div>
  );
}

import Open from "@/public/icons/openEye.svg";
import Close from "@/public/icons/closeEye.svg";
import Image from "next/image";

const PasswordToggleBtn = (props: {
  isVisible: boolean;
  onClick: () => void;
}) => {
  const { isVisible, onClick } = props;

  const passwordToggleIcon = isVisible ? Open : Close;

  return (
    <Image
      width={24}
      height={24}
      src={passwordToggleIcon}
      onClick={onClick}
      className="cursor-pointer"
      alt="isVisible"
    />
  );
};

export default PasswordToggleBtn;

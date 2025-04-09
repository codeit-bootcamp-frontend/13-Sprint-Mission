import FormField from "../common/FormField/FormField";
import FileInput from "../common/Input/FileInput";

export default function AddBoardForm() {
  return (
    <form className="flex flex-col gap-6">
      <FormField label="제목" required placeholder="제목을 입력해 주세요" />
      <FormField
        label="내용"
        required
        isTextarea
        height={282}
        placeholder="내용을 입력해 주세요"
      />
      <FileInput label="이미지" onChange={() => {}} />
    </form>
  );
}

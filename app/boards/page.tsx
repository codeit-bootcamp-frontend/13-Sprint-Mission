import Best from "@/components/BestBoards/Best";
import All from "@/components/AllBoards/All";

export default function Boards() {
  return (
    <div className="flex justify-center items-center my-10 lg:my-0">
      <div className="max-w-[1200px] min-w-[343px] px-6 lg:p-4 md:p-6 flex flex-col gap-10">
        <Best />
        <All />
      </div>
    </div>
  );
}

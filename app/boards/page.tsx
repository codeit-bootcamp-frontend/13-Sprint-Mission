import Best from "@/components/BestBoards/Best";
import All from "@/components/AllBoards/All";

export default async function Boards() {
  return (
    <div className="flex justify-center items-center my-10">
      <div className="flex flex-col gap-10">
        <Best />
        <All />
      </div>
    </div>
  );
}

import AllBoardsLoading from "./AllBoardsLoading";

export default function AllLoading() {
  return (
    <div className="flex flex-col gap-6">
      <div className="w-[100px] h-[30px] bg-gray200 rounded-md gradientWave" />
      <div className="w-full h-[42px] bg-gray200 rounded-md gradientWave" />
      {Array.from({ length: 10 }, (_, i) => (
        <AllBoardsLoading key={i} />
      ))}
    </div>
  );
}

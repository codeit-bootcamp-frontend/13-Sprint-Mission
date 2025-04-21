import AllBoardsLoading from "./AllBoardsLoading";

export default function AllLoading() {
  return (
    <div className="flex flex-col gap-6">
      <div className="bg-gray200 gradientWave h-[30px] w-[100px] rounded-md" />
      <div className="bg-gray200 gradientWave h-[42px] w-full rounded-md" />
      {Array.from({ length: 10 }, (_, i) => (
        <AllBoardsLoading key={i} />
      ))}
    </div>
  );
}

export default function AllBoardsLoading() {
  return (
    <div className="w-full h-[138px] flex flex-col gap-4 pb-6 bg-bg border-b border-gray200">
      <div className="w-full flex justify-between items-start gap-12">
        <div className="max-w-[500px] w-full h-[40px] bg-gray200 rounded-md gradientWave" />
        <div className="w-[72px] h-[72px] bg-gray200 rounded-md gradientWave" />
      </div>
      <div className="w-[200px] h-[20px] bg-gray200 rounded-md gradientWave" />
    </div>
  );
}

export default function BestBoardsLoading() {
  return (
    <div className="w-full h-[169px] p-6 bg-gray50 rounded-lg cursor-pointer md:h-[198px] maxM:w-full maxM:h-[198px]">
      <div className="h-full flex flex-col justify-between md:gap-10 maxM:gap-10">
        <div className="w-full flex justify-between items-center gap-2">
          <div className="flex-1 h-12 bg-gray200 rounded-md gradientWave" />
          <div className="w-12 h-12 bg-gray200 rounded-md gradientWave" />
        </div>
        <div className="w-[200px] h-[20px] bg-gray200 rounded-md gradientWave" />
      </div>
    </div>
  );
}

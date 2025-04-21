export default function BestBoardsLoading() {
  return (
    <div className="bg-gray50 maxM:w-full maxM:h-[198px] h-[169px] w-full cursor-pointer rounded-lg p-6 md:h-[198px]">
      <div className="maxM:gap-10 flex h-full flex-col justify-between md:gap-10">
        <div className="flex w-full items-center justify-between gap-2">
          <div className="bg-gray200 gradientWave h-12 flex-1 rounded-md" />
          <div className="bg-gray200 gradientWave h-12 w-12 rounded-md" />
        </div>
        <div className="bg-gray200 gradientWave h-[20px] w-[200px] rounded-md" />
      </div>
    </div>
  );
}

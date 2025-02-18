function FeatureCard({ image, tag, title, content, isReversed }) {
  return (
    <div
      className={`flex w-screen max-w-247 flex-col justify-between gap-6 px-4 break-keep md:px-6 xl:items-center xl:gap-16 xl:px-0 ${
        isReversed ? "xl:flex-row-reverse" : "xl:flex-row"
      }`}
    >
      <img className="md:w-auto" src={image} alt="" />
      <div
        className={`flex flex-col ${isReversed ? "items-end text-right" : "items-start"}`}
      >
        <div className="font-bold text-blue-500 md:text-lg">{tag}</div>
        <div className="mt-2 text-2xl font-bold text-gray-700 md:mt-4 md:text-3xl xl:w-72 xl:text-[40px]">
          {title}
        </div>
        <div className="mt-4 text-lg whitespace-pre-line text-gray-700 md:mt-6 xl:text-2xl">
          {content}
        </div>
      </div>
    </div>
  );
}

export default FeatureCard;

function FeatureCard({ image, tag, title, content, isReversed }) {
  return (
    <div
      className={`flex w-247 items-center justify-between gap-16 ${
        isReversed ? "flex-row-reverse" : "flex-row"
      }`}
    >
      <img src={image} alt="" />
      <div
        className={`flex flex-col ${isReversed ? "items-end text-right" : "items-start"}`}
      >
        <div className="text-blue-500">{tag}</div>
        <div className="pt-3 text-5xl font-bold text-gray-700">{title}</div>
        <div className="pt-6 text-gray-700">{content}</div>
      </div>
    </div>
  );
}

export default FeatureCard;

function LogoImage({ small, large }) {
  return (
    <>
      <img src={small} alt="판다 마켓 로고" className="block md:hidden" />
      <img src={large} alt="판다 마켓 로고" className="hidden md:block" />
    </>
  );
}

export default LogoImage;

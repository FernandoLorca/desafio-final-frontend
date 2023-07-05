const HeroText = ({ title, subTitle }) => {
  return (
    <>
      <h1 className="mb-5 text-6xl font-bold">{title}</h1>
      <p className="mb-10 text-2xl">{subTitle}</p>
    </>
  );
};

export default HeroText;

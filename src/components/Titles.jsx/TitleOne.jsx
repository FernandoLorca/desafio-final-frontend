const TitleOne = ({ title, classProperty = '' }) => {
  return <h1 className={`mb-5 font-bold ${classProperty}`}>{title}</h1>;
};

export default TitleOne;

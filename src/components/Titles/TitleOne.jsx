const TitleOne = ({ title, classProperty = '' }) => {
  return <h1 className={`font-bold ${classProperty}`}>{title}</h1>;
};

export default TitleOne;

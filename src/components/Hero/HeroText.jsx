import TitleOne from '../Titles.jsx/TitleOne';

const HeroText = ({ title, subTitle }) => {
  return (
    <div className="lg:max-w-[50rem]">
      <TitleOne
        title={title}
        classProperty="text-6xl"
      />
      <p className="text-2xl">{subTitle}</p>
    </div>
  );
};

export default HeroText;

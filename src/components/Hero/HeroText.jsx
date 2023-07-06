import TitleOne from '../Titles.jsx/TitleOne';

const HeroText = ({ title, subTitle }) => {
  return (
    <>
      <TitleOne title={title} /> <p className="text-2xl">{subTitle}</p>
    </>
  );
};

export default HeroText;

import { Link } from 'react-router-dom';

const Categorie = ({ title, categorie }) => {
  const path = title.toLowerCase().split(' ').join('-');

  console.log(categorie);
  const img = categorie.img;

  return (
    <div
      className={`relative h-full w-full rounded-xl bg-dark-200 lg:max-w-[10rem] lg:cursor-pointer lg:transition lg:hover:scale-105`}
    >
      <Link to={path}>
        <img
          className="absolute z-10 h-full w-full rounded-xl object-cover"
          src={img}
          alt=""
        />
        <div className="absolute z-20 h-full w-full rounded-xl bg-dark-950 opacity-50"></div>
        <h3 className="relative z-30 flex h-full items-center justify-center px-2 text-2xl font-bold text-dark-100 md:text-base">
          {title}
        </h3>
      </Link>
    </div>
  );
};

export default Categorie;

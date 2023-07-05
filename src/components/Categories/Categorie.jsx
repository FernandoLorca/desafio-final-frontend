const Categorie = ({ title, bgConfig }) => {
  return (
    <div
      className={`relative h-full w-full rounded-xl bg-dark-200 lg:cursor-pointer lg:transition lg:hover:scale-105 ${bgConfig}`}
    >
      <div className="absolute z-10 h-full w-full rounded-xl bg-dark-950 opacity-50"></div>
      <h3 className="relative z-20 flex h-full items-center justify-center px-2 text-2xl font-bold text-dark-100 md:text-base">
        {title}
      </h3>
    </div>
  );
};

export default Categorie;

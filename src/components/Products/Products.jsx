const Products = ({ title }) => {
  return (
    <div className="flex justify-center">
      <div className="px-5 py-10 lg:w-full lg:max-w-[84.3rem]">
        <h2 className="mb-5 text-4xl font-bold md:px-20">{title}</h2>
        <div className="flex h-[10rem] gap-5 md:px-20 lg:flex lg:h-32">
          <div
            className={`relative h-full w-full rounded-xl bg-dark-200 bg-[url('/categories/mother.webp')] bg-cover bg-center bg-repeat lg:cursor-pointer lg:transition lg:hover:scale-105`}
          >
            <div className="absolute z-10 h-full w-full rounded-xl bg-dark-950 opacity-50"></div>
            <h3 className="relative z-20 flex h-full items-center justify-center px-2 text-2xl font-bold text-dark-100 md:text-base">
              Placas madre
            </h3>
          </div>
          <div
            className={`relative h-full w-full rounded-xl bg-dark-200 bg-[url('/categories/mother.webp')] bg-cover bg-center bg-repeat lg:cursor-pointer lg:transition lg:hover:scale-105`}
          >
            <div className="absolute z-10 h-full w-full rounded-xl bg-dark-950 opacity-50"></div>
            <h3 className="relative z-20 flex h-full items-center justify-center px-2 text-2xl font-bold text-dark-100 md:text-base">
              Placas madre
            </h3>
          </div>
          <div
            className={`relative h-full w-full rounded-xl bg-dark-200 bg-[url('/categories/mother.webp')] bg-cover bg-center bg-repeat lg:cursor-pointer lg:transition lg:hover:scale-105`}
          >
            <div className="absolute z-10 h-full w-full rounded-xl bg-dark-950 opacity-50"></div>
            <h3 className="relative z-20 flex h-full items-center justify-center px-2 text-2xl font-bold text-dark-100 md:text-base">
              Placas madre
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;

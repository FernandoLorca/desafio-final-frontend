const Hero = () => {
  return (
    <div className="repeat relative h-screen bg-[url('/hero.webp')] bg-cover bg-center bg-no-repeat text-dark-100">
      <div className="absolute z-10 h-full w-full bg-dark-900 opacity-60"></div>
      <div className="relative z-20 flex h-full flex-col justify-center gap-2 p-5">
        <h1 className="text-6xl font-bold">
          Las mejores ofertas en productos electrónicos
        </h1>
        <p className="mb-5 text-3xl">
          La tienda con mas ofertas en Chile en productos electrónicos
        </p>
        <button className="rounded-full bg-gradient-to-br from-primary-600 to-secondary-700 px-5 py-4 ">
          Registrate
        </button>
      </div>
    </div>
  );
};

export default Hero;

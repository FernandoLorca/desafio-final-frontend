import ButtonCta from './ButtonCta';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <div className="repeat relative h-screen bg-[url('/hero.webp')] bg-cover bg-center bg-no-repeat text-dark-100">
      <div className="absolute z-20">
        <Navbar />
      </div>
      <div className="absolute z-10 h-full w-full bg-dark-900 opacity-60"></div>
      <div className="relative z-20 flex h-full flex-col justify-center gap-2 p-5">
        <h1 className="text-6xl font-bold">
          Las mejores ofertas en productos electrónicos
        </h1>
        <p className="mb-5 text-3xl">
          La tienda con mas ofertas en Chile en productos electrónicos
        </p>
        <ButtonCta text="Registrate" />
      </div>
    </div>
  );
};

export default Hero;

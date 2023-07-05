import { useState } from 'react';

import ButtonCta from '../Buttons/ButtonCta';
import Navbar from '../Navbar/Navbar';
import NavbarListMobile from '../Navbar/NavbarListMobile';
import HeroText from './HeroText';

const Hero = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div className="relative h-screen bg-[url('/hero.webp')] bg-cover bg-center bg-no-repeat text-dark-100">
      <div className="absolute z-30 w-full px-5 py-2 md:py-3">
        <Navbar
          onClick={() => setMenu(!menu)}
          menu={menu}
        />
      </div>
      <div className="absolute z-10 h-full w-full bg-dark-900 opacity-70"></div>
      <div className="relative z-20">
        <NavbarListMobile menu={menu} />
      </div>
      <div
        className={`relative z-20 flex h-full flex-col gap-2 px-5 pt-32 md:px-20 lg:pt-48 ${
          menu && 'hidden'
        }`}
      >
        <div className="mb-5">
          <HeroText
            title="Las mejores ofertas en productos electrónicos"
            subTitle="La tienda con mas ofertas en Chile en productos electrónicos"
          />
        </div>
        <ButtonCta
          text="Registrate"
          textSize="text-lg"
        />
      </div>
    </div>
  );
};

export default Hero;

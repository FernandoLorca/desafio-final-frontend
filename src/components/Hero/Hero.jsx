/* eslint-disable react-hooks/exhaustive-deps */
import { Link } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';

import { AuthContext } from '../../context/AuthContext';

import ButtonCta from '../Buttons/ButtonCta';
import Navbar from '../Navbar/Navbar';
import NavbarListMobile from '../Navbar/NavbarListMobile';
import HeroText from './HeroText';

const Hero = ({
  heroBackground,
  heroTitle,
  heroSubTitle,
  displayButton = 'block',
}) => {
  const { token, getUser, user } = useContext(AuthContext);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    if (token) {
      getUser();
    }
  }, [token]);

  return (
    <div
      className={`relative h-screen bg-cover bg-center bg-no-repeat text-dark-100 ${heroBackground}`}
    >
      <div className="absolute z-30 w-full px-5 py-2 md:py-3">
        <Navbar
          onClick={() => setMenu(!menu)}
          menu={menu}
          user={user && [user].length > 0 && user}
          token={token}
        />
      </div>
      <div className="absolute z-10 h-full w-full bg-dark-900 opacity-70"></div>
      <div className="relative z-20">
        <NavbarListMobile
          menu={menu}
          user={user && [user].length > 0 && user}
        />
      </div>
      <div className="relative z-20 flex justify-center">
        <div
          className={`flex h-full flex-col gap-2 px-5 pt-32 md:px-20 lg:pt-48 ${
            menu && 'hidden'
          }`}
        >
          <div className="mb-5">
            <HeroText
              title={heroTitle}
              subTitle={heroSubTitle}
            />
          </div>
          <div className="block w-full md:w-1/3 lg:w-1/5">
            <Link to="/register">
              <ButtonCta
                text="Registrate"
                textSize={`text-lg ${displayButton}`}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

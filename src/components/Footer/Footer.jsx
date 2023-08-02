import { BsInstagram, BsFacebook, BsTwitter } from 'react-icons/bs';
import { useContext } from 'react';

import { AuthContext } from '../../context/AuthContext';

import NavbarPrivateButtons from '../Navbar/NavbarPrivateButtons';
import NavbarPublicButtons from '../Navbar/NavbarPublicButtons';

import Logo from '../Logo';
import Link from '../Buttons/ButtonLink';
import Rrss from '../Rrss';

const Footer = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="mt-10 flex flex-col items-center bg-gradient-to-b from-primary-800 to-primary-900 px-5 text-dark-100">
      <div className="py-10 lg:py-5">
        <Logo
          logoSize="max-w-[4rem] lg:max-w-[3rem]"
          fontSize="text-2xl lg:text-xl"
        />
      </div>
      <div className="pb-5 text-center">
        <div className="flex justify-center gap-5 py-5 md:gap-3">
          {user && user.status !== 500 && [user].length > 0 ? (
            <NavbarPrivateButtons user={user} />
          ) : (
            <NavbarPublicButtons />
          )}
        </div>
      </div>
      <div className="flex flex-col gap-5 text-center md:flex-row">
        <Link
          text="Placas madre"
          href="#"
          fontSize="text-sm"
        />
        <Link
          text="Ram"
          href="#"
          fontSize="text-sm"
        />
        <Link
          text="Ssd y Hdd"
          href="#"
          fontSize="text-sm"
        />
        <Link
          text="Gabinetes"
          href="#"
          fontSize="text-sm"
        />
        <Link
          text="Fuentes de poder"
          href="#"
          fontSize="text-sm"
        />
        <Link
          text="Tarjetas de video"
          href="#"
          fontSize="text-sm"
        />
        <Link
          text="Procesadores"
          href="#"
          fontSize="text-sm"
        />
      </div>
      <div className="flex justify-center gap-7 pb-5 pt-10 lg:pt-5">
        <Rrss icon={<BsInstagram />} />
        <Rrss icon={<BsFacebook />} />
        <Rrss icon={<BsTwitter />} />
      </div>
    </div>
  );
};

export default Footer;

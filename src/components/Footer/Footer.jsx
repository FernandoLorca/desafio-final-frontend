import { BsInstagram, BsFacebook, BsTwitter } from 'react-icons/bs';

import Logo from '../Logo';
import TitleTwo from '../Titles.jsx/TitleTwo';
import Link from '../Buttons/Link';
import Rrss from '../RRSS';

const Footer = () => {
  return (
    <div className="mt-10 bg-gradient-to-b from-primary-800 to-primary-900 px-5 text-dark-100">
      <div className="py-10">
        <Logo
          logoSize="max-w-[4rem]"
          fontSize="text-2xl"
        />
      </div>
      <div className="pb-5 text-center">
        <TitleTwo
          title="Perfil"
          textSize="text-4xl"
        />
        <div className="flex flex-col gap-5">
          <Link
            text="Entrar"
            href="#"
            fontSize="text-lg"
          />
          <Link
            text="Registrarse"
            href="#"
            fontSize="text-lg"
          />
        </div>
      </div>
      <div className="py-5 text-center">
        <TitleTwo
          title="Categorías"
          textSize="text-4xl"
        />
        <div className="flex flex-col gap-5">
          <Link
            text="Placas madre"
            href="#"
            fontSize="text-lg"
          />
          <Link
            text="Ram"
            href="#"
            fontSize="text-lg"
          />
          <Link
            text="Ssd y Hdd"
            href="#"
            fontSize="text-lg"
          />
          <Link
            text="Gabinetes"
            href="#"
            fontSize="text-lg"
          />
          <Link
            text="Fuentes de poder"
            href="#"
            fontSize="text-lg"
          />
          <Link
            text="Tarjetas de video"
            href="#"
            fontSize="text-lg"
          />
          <Link
            text="Procesadores"
            href="#"
            fontSize="text-lg"
          />
        </div>
      </div>
      <div className="flex justify-center gap-7 py-5">
        <Rrss icon={<BsInstagram />} />
        <Rrss icon={<BsFacebook />} />
        <Rrss icon={<BsTwitter />} />
      </div>
    </div>
  );
};

export default Footer;

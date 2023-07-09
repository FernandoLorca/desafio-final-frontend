import { BsList, BsXLg } from 'react-icons/bs';

import NavbarList from './NavbarList';
import ButtonPassive from '../Buttons/ButtonPassive';
import ButtonCta from '../Buttons/ButtonCta';

const Navbar = ({ onClick, menu }) => {
  return (
    <div className="flex items-center justify-between md:px-16">
      <img
        src="/logo.svg"
        alt="Logo"
        className="w-16 md:w-10"
      />
      <NavbarList />
      <div className="hidden gap-2 lg:flex">
        <ButtonPassive
          text="Entrar"
          toHref="/login"
        />
        <ButtonCta
          text="Registrate"
          textSize="text-sm"
        />
      </div>
      <div
        className="lg:hidden"
        onClick={onClick}
      >
        <BsList
          className={`h-10 max-h-full w-10 max-w-full ${
            !menu ? 'block' : 'hidden'
          }`}
        />
        <BsXLg
          className={`h-10 max-h-full w-10 max-w-full ${
            menu ? 'block' : 'hidden'
          }`}
        />
      </div>
    </div>
  );
};

export default Navbar;

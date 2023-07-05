import { BsList, BsXLg } from 'react-icons/bs';

import NavbarList from './NavbarList';
import ButtonPassive from '../Buttons/ButtonPassive';
import ButtonCta from '../Buttons/ButtonCta';

const Navbar = ({ onClick, menu }) => {
  return (
    <div className="flex items-center justify-between">
      <img
        src="/logo.svg"
        alt="Logo"
        className="w-16 md:w-10"
      />
      <div className="flex items-center gap-5">
        <NavbarList />
        <div className="flex gap-2">
          <ButtonPassive text="Entrar" />
          <ButtonCta
            text="Registrate"
            textSize="text-xs"
          />
        </div>
      </div>
      <button
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
      </button>
    </div>
  );
};

export default Navbar;

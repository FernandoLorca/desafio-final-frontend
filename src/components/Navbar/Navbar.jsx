import { BsList, BsXLg } from 'react-icons/bs';

import NavbarList from './NavbarList';
import NavbarPublicButtons from './NavbarPublicButtons';

const Navbar = ({ onClick, menu, user }) => {
  return (
    <div className="flex items-center justify-between md:px-16">
      <img
        src="/logo.svg"
        alt="Logo"
        className="w-16 md:w-10"
      />
      <NavbarList />
      {user && [user].length > 0 ? (
        'Componente perfil de usuario'
      ) : (
        <NavbarPublicButtons />
      )}
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

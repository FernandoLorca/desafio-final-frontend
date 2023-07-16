import { BsList, BsXLg } from 'react-icons/bs';
import { useContext } from 'react';

import { AuthContext } from '../../context/AuthContext';

import NavbarList from './NavbarList';
import NavbarPublicButtons from './NavbarPublicButtons';

const Navbar = ({ onClick, menu }) => {
  const { user } = useContext(AuthContext);
  return (
    <div className="flex items-center justify-between md:px-16">
      <img
        src="/logo.svg"
        alt="Logo"
        className="w-16 md:w-10"
      />
      <NavbarList />
      <NavbarPublicButtons />
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

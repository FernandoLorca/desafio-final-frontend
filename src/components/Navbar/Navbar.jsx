import { BsList, BsXLg } from 'react-icons/bs';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../context/AuthContext';

import NavbarList from './NavbarList';
import NavbarPublicButtons from './NavbarPublicButtons';
import NavbarPrivateButtons from './NavbarPrivateButtons';

const Navbar = ({ onClick, menu, user }) => {
  const { userLoaded } = useContext(AuthContext);

  if (!userLoaded) {
    <div>Cargando...</div>;
  }

  return (
    <div className="flex items-center justify-between md:px-16">
      <Link to="/">
        <img
          src="/logo.svg"
          alt="Logo"
          className="w-16 md:w-10"
        />
      </Link>
      <NavbarList />
      {user && user.status !== 500 && [user].length > 0 ? (
        <div className="hidden lg:block">
          <NavbarPrivateButtons user={user} />
        </div>
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

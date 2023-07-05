import { BsList, BsXLg } from 'react-icons/bs';

import NavbarList from './NavbarList';

const Navbar = ({ onClick, menu }) => {
  return (
    <div className="flex items-center justify-between px-5 py-2 ">
      <img
        src="/logo.svg"
        alt="Logo"
        className="w-16"
      />
      <div>
        <NavbarList />
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

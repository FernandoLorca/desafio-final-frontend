import { useState } from 'react';

import Navbar from './Navbar';
import NavbarListMobile from './NavbarListMobile';

const NavbarMain = ({ user }) => {
  const [menu, setMenu] = useState(false);
  return (
    <div className="bg-primary-800 px-5 py-2 text-dark-200">
      <Navbar
        onClick={() => setMenu(!menu)}
        menu={menu}
        user={user && [user].length > 0 && user}
      />
      <div className="relative z-20">
        <NavbarListMobile
          menu={menu}
          setMenu={setMenu}
          user={user && [user].length > 0 && user}
        />
      </div>
    </div>
  );
};

export default NavbarMain;

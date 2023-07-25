import { useContext } from 'react';

import { AuthContext } from '../context/AuthContext';

import NavbarMain from '../components/Navbar/NavbarMain';
import TitleOne from '../components/Titles/TitleOne';
import TitleTwo from '../components/Titles/TitleTwo';
import Footer from '../components/Footer/Footer';

const Profile = () => {
  const { user } = useContext(AuthContext);
  let email;

  user && [user].length > 0 && (email = user.email);

  return (
    <div className="flex h-screen flex-col">
      <NavbarMain user={user} />
      <div className="m-5 flex flex-grow justify-center">
        <div className="flex w-full max-w-sm items-center justify-center rounded-lg border-2 border-dark-200 md:px-20">
          <ul className="text-center">
            <li className="mb-3">
              <TitleOne
                title="Tipo de cuenta:"
                classProperty="mb-1 text-2xl"
              />
              <p>{user.role === 'user' ? 'Usuario' : 'Administrador'}</p>
            </li>
            <li className="mb-3">
              <TitleTwo
                title="Email"
                textSize="mb-1"
              />
              <p>{email}</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="-mt-5">
        <Footer />
      </div>
    </div>
  );
};

export default Profile;

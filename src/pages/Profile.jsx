import { useContext } from 'react';

import { AuthContext } from '../context/AuthContext';

import NavbarMain from '../components/Navbar/NavbarMain';
import TitleOne from '../components/Titles.jsx/TitleOne';
import TitleTwo from '../components/Titles.jsx/TitleTwo';
import Footer from '../components/Footer/Footer';
import ButtonLink from '../components/Buttons/ButtonLink';

const Profile = () => {
  const { user } = useContext(AuthContext);
  let email;
  user && [user].length > 0 && (email = user.email);

  return (
    <div>
      <NavbarMain />
      <div className="px-5 py-5 md:px-16">
        <ul>
          <li className="mb-3">
            <TitleOne
              title="Perfil"
              classProperty="mb-0 text-2xl"
            />
            <p>Usuario</p>
          </li>
          <li className="mb-3">
            <TitleTwo
              title="Nombre"
              textSize="mb-0"
            />
            <p>Agregar información</p>
          </li>
          <li className="mb-3">
            <TitleTwo
              title="Email"
              textSize="mb-0"
            />
            <p>{email}</p>
          </li>
          <li className="mb-3">
            <TitleTwo
              title="Número de teléfono"
              textSize="mb-0"
            />
            <p>Agregar información</p>
          </li>
        </ul>
        <ButtonLink text="Editar perfil" />
      </div>
      <div className="-mt-10">
        <Footer />
      </div>
    </div>
  );
};

export default Profile;

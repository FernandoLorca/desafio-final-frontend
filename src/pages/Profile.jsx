import { useContext } from 'react';

import { AuthContext } from '../context/AuthContext';

import NavbarMain from '../components/Navbar/NavbarMain';
import TitleOne from '../components/Titles/TitleOne';
import TitleTwo from '../components/Titles/TitleTwo';
import Footer from '../components/Footer/Footer';
import { Link } from 'react-router-dom';

const Profile = () => {
  const { user } = useContext(AuthContext);
  let email;

  user && [user].length > 0 && (email = user.email);

  console.log('role', user);

  return (
    <div className="flex h-screen flex-col">
      <NavbarMain user={user} />
      <div className="m-5 flex flex-grow justify-center">
        <div className="md:px-30 flex w-full max-w-sm items-center justify-center rounded-lg border-2 border-dark-200">
          <ul className="text-center">
            <li className="mb-3">
              <TitleOne
                title="Tipo de cuenta:"
                classProperty="mb-1 text-2xl"
              />
              <p className="rounded border-4 border-primary-600">
                {user.role && user.role === 'user'
                  ? 'Usuario'
                  : 'Administrador'}
              </p>
            </li>
            <li className="mb-3 border-b-4 border-primary-600">
              <TitleTwo
                title="Email"
                textSize="mb-1"
              />
              <p>
                {email ? email : 'Modifica tus datos para agregar un email'}
              </p>
            </li>
            <li className="mb-3 border-b-4 border-primary-600">
              <TitleTwo
                title="Nombre"
                textSize="mb-1"
              />
              <p>
                {user.first_name
                  ? user.first_name
                  : 'Modifica tus datos para agregar tu nombre'}
              </p>
            </li>
            <li className="mb-3 border-b-4 border-primary-600">
              <TitleTwo
                title="Apellido"
                textSize="mb-1"
              />
              <p>
                {user.last_name
                  ? user.last_name
                  : 'Modifica tus datos para agregar tu apellido'}
              </p>
            </li>
            <li className="mb-3 border-b-4 border-primary-600">
              <TitleTwo
                title="Teléfono"
                textSize="mb-1"
              />
              <p>
                {user.phone
                  ? user.phone
                  : 'Modifica tus datos para agregar un teléfono'}
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="m-5 flex flex-grow justify-center">
        {/* AGREGAR RUTA */}
        <Link to={`/perfil/}`}>
          <button className="rounded bg-primary-500 px-4 py-2 font-bold hover:bg-primary-700">
            Modifica tus datos
          </button>
        </Link>
      </div>
      <div className="-mt-5">
        <Footer />
      </div>
    </div>
  );
};

export default Profile;

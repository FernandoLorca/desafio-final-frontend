import { BsPencilSquare, BsFillCheckSquareFill } from 'react-icons/bs';
import { useContext, useState } from 'react';

import { AuthContext } from '../context/AuthContext';

import NavbarMain from '../components/Navbar/NavbarMain';
import TitleOne from '../components/Titles/TitleOne';
import TitleTwo from '../components/Titles/TitleTwo';
import Footer from '../components/Footer/Footer';

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [edit, setEdit] = useState(false);

  let email;

  user && [user].length > 0 && (email = user.email);

  console.log('role', user);

  return (
    <div className="flex h-screen flex-col">
      <NavbarMain user={user} />
      <div className="m-5 flex flex-grow justify-center">
        <div className="md:px-30 flex w-full max-w-sm items-center justify-center rounded-lg border-2 border-dark-200">
          <ul className="text-center">
            <li className="mb-5">
              <TitleOne
                title="Tipo de cuenta:"
                classProperty="mt-2"
              />
              <p>
                {user.role && user.role === 'user'
                  ? 'Usuario'
                  : 'Administrador'}
              </p>
            </li>
            <li className="mb-5">
              <TitleTwo title="Email:" />
              <p>
                {email ? email : 'Modifica tus datos para agregar un email'}
              </p>
            </li>
            <li className="mb-5">
              <TitleTwo title="Nombre:" />
              <div
                className={`flex items-center justify-center gap-2 ${
                  edit ? 'hidden' : 'block'
                }`}
              >
                <p>{user.first_name ? user.first_name : 'Agrega tu nombre'}</p>
                <BsPencilSquare
                  className="cursor-pointer text-primary-500 hover:opacity-75"
                  onClick={() => setEdit(!edit)}
                />
              </div>
              <div className={`items-center gap-2 ${edit ? 'flex' : 'hidden'}`}>
                <input
                  type="text"
                  className="w-full rounded border border-dark-300 py-1 pl-2 text-sm"
                  placeholder="Escribe tu nombre"
                />
                <BsFillCheckSquareFill className="cursor-pointer text-3xl text-primary-500 hover:opacity-75" />
              </div>
            </li>
            <li className="mb-5">
              <TitleTwo
                title="Apellido:"
                textSize="mb-1"
              />
              <div className="flex items-center gap-2">
                <p>{user.last_name ? user.last_name : 'Agregar tu apellido'}</p>
                <BsPencilSquare className="cursor-pointer text-primary-500 hover:opacity-75" />
                <BsFillCheckSquareFill className="cursor-pointer text-primary-500 hover:opacity-75" />
              </div>
            </li>
            <li className="mb-5">
              <TitleTwo
                title="Teléfono:"
                textSize="mb-1"
              />
              <div className="flex items-center gap-2">
                <p>{user.phone ? user.phone : 'Agregar un teléfono'}</p>
                <BsPencilSquare className="cursor-pointer text-primary-500 hover:opacity-75" />
                <BsFillCheckSquareFill className="cursor-pointer text-primary-500 hover:opacity-75" />
              </div>
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

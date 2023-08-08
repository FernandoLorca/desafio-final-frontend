/* eslint-disable react-hooks/exhaustive-deps */
import { BsPencilSquare, BsFillCheckSquareFill } from 'react-icons/bs';
import { useContext, useState, useEffect } from 'react';

import { AuthContext } from '../context/AuthContext';

import NavbarMain from '../components/Navbar/NavbarMain';
import TitleOne from '../components/Titles/TitleOne';
import TitleTwo from '../components/Titles/TitleTwo';
import Footer from '../components/Footer/Footer';

const Profile = () => {
  const { token, user, getUser } = useContext(AuthContext);
  const [inputValues, setInputValues] = useState({
    first_name: '',
    last_name: '',
    phone: '',
  });
  const [editName, setEditName] = useState(false);
  const [editLastName, setEditLastName] = useState(false);
  const [editPhone, setEditPhone] = useState(false);

  let email;
  user && [user].length > 0 && (email = user.email);

  const handleColumn = () => {
    const editingKey = Object.keys(inputValues).find(
      key => inputValues[key] !== ''
    );

    switch (editingKey) {
      case 'first_name':
        return 'first_name';
      case 'last_name':
        return 'last_name';
      case 'phone':
        return 'phone';
      default:
        return '';
    }
  };

  const editProfile = async () => {
    try {
      await fetch(import.meta.env.VITE_API_URL + '/users/user', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          userToEdit: user.email,
          param: handleColumn(),
          newParam: inputValues[handleColumn()],
        }),
      });
      await getUser();
      setEditName(false);
      setEditLastName(false);
      setEditPhone(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex h-screen flex-col">
      <NavbarMain user={user} />
      <div className="m-5 flex justify-center">
        <div className="md:px-30 flex w-full max-w-sm items-center justify-center rounded-lg border-2 border-dark-200">
          <ul className="text-center">
            <li className="mb-5">
              <TitleOne
                title="Tipo de cuenta:"
                classProperty="mt-2"
              />
              <p>
                {user && user.role === 'user' ? 'Usuario' : 'Administrador'}
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
                  editName ? 'hidden' : 'block'
                }`}
              >
                <p>
                  {user && user.first_name
                    ? user.first_name
                    : 'Agrega tu nombre'}
                </p>
                <BsPencilSquare
                  className="cursor-pointer text-primary-500 hover:opacity-75"
                  onClick={() => setEditName(true)}
                />
              </div>
              <div
                className={`items-center gap-2 ${editName ? 'flex' : 'hidden'}`}
              >
                <input
                  type="text"
                  className="w-full rounded border border-dark-300 py-1 pl-2 text-sm"
                  placeholder="Escribe tu nombre"
                  onChange={e =>
                    setInputValues({
                      ...inputValues,
                      first_name: e.target.value,
                    })
                  }
                  value={inputValues.first_name}
                />
                <BsFillCheckSquareFill
                  className="cursor-pointer text-3xl text-primary-500 hover:opacity-75"
                  onClick={() => {
                    editProfile();
                    getUser();
                    setEditName(false);
                    setInputValues({ ...inputValues, first_name: '' });
                  }}
                />
              </div>
            </li>
            <li className="mb-5">
              <TitleTwo
                title="Apellido:"
                textSize="mb-1"
              />
              <div
                className={`flex items-center justify-center gap-2 ${
                  editLastName ? 'hidden' : 'block'
                }`}
              >
                <p>
                  {user && user.last_name
                    ? user.last_name
                    : 'Agregar tu apellido'}
                </p>
                <BsPencilSquare
                  className="cursor-pointer text-primary-500 hover:opacity-75"
                  onClick={() => setEditLastName(true)}
                />
              </div>
              <div
                className={`items-center gap-2 ${
                  editLastName ? 'flex' : 'hidden'
                }`}
              >
                <input
                  type="text"
                  className="w-full rounded border border-dark-300 py-1 pl-2 text-sm"
                  placeholder="Escribe tu nombre"
                  onChange={e =>
                    setInputValues({
                      ...inputValues,
                      last_name: e.target.value,
                    })
                  }
                  value={inputValues.last_name}
                />
                <BsFillCheckSquareFill
                  className="cursor-pointer text-3xl text-primary-500 hover:opacity-75"
                  onClick={() => {
                    editProfile();
                    getUser();
                    setEditLastName(false);
                    setInputValues({ ...inputValues, last_name: '' });
                  }}
                />
              </div>
            </li>
            <li className="mb-5">
              <TitleTwo
                title="Teléfono:"
                textSize="mb-1"
              />
              <div
                className={`flex items-center justify-center gap-2 ${
                  editPhone ? 'hidden' : 'block'
                }`}
              >
                <p>{user && user.phone ? user.phone : 'Agregar un teléfono'}</p>
                <BsPencilSquare
                  className="cursor-pointer text-primary-500 hover:opacity-75"
                  onClick={() => setEditPhone(true)}
                />
              </div>
              <div
                className={`items-center gap-2 ${
                  editPhone ? 'flex' : 'hidden'
                }`}
              >
                <input
                  type="text"
                  className="w-full rounded border border-dark-300 py-1 pl-2 text-sm"
                  placeholder="Escribe tu nombre"
                  onChange={e =>
                    setInputValues({
                      ...inputValues,
                      phone: e.target.value,
                    })
                  }
                  value={inputValues.phone}
                />
                <BsFillCheckSquareFill
                  className="cursor-pointer text-3xl text-primary-500 hover:opacity-75"
                  onClick={() => {
                    editProfile();
                    getUser();
                    setEditPhone(false);
                    setInputValues({ ...inputValues, phone: '' });
                  }}
                />
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

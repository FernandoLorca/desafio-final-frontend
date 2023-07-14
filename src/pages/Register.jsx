import { Link } from 'react-router-dom';
import { useState } from 'react';

import ButtonCta from '../components/Buttons/ButtonCta';
import Logo from '../components/Logo';
import TitleOne from '../components/Titles.jsx/TitleOne';

const Register = () => {
  const [newUser, setNewUser] = useState({
    email: '',
    password: '',
    repeatPassword: '',
  });

  return (
    <div className="flex h-screen items-center justify-center bg-primary-900 bg-[url('/hero.webp')] bg-cover bg-center bg-no-repeat text-dark-800">
      <div className="mx-10 flex w-full flex-col rounded-xl bg-dark-100 p-8 md:max-w-[40rem]">
        <div className="mb-5">
          <Logo
            logoSize="max-w-[3rem] lg:max-w-[3rem]"
            fontSize="text-xl lg:text-xl text-primary-700"
          />
        </div>
        <TitleOne
          title="Registrarse"
          classProperty="text-xl"
        />
        <form className="flex flex-col">
          <div className="mb-5">
            <input
              className="w-full rounded-xl py-2 pl-2 focus:outline-none focus:ring focus:ring-primary-400"
              type="text"
              placeholder="Email"
              onChange={e => setNewUser({ ...newUser, email: e.target.value })}
              value={newUser.email}
            />
          </div>
          <div className="mb-5">
            <input
              className="w-full rounded-xl py-2 pl-2 focus:outline-none focus:ring focus:ring-primary-400"
              type="password"
              placeholder="Contraseña"
              onChange={e =>
                setNewUser({ ...newUser, password: e.target.value })
              }
              value={newUser.password}
            />
          </div>
          <div className="mb-5">
            <input
              className="w-full rounded-xl py-2 pl-2 focus:outline-none focus:ring focus:ring-primary-400"
              type="password"
              placeholder="Repetir contraseña"
              onChange={e =>
                setNewUser({ ...newUser, repeatPassword: e.target.value })
              }
              value={newUser.repeatPassword}
            />
          </div>
          <div className="flex items-center gap-5 lg:w-1/4">
            <ButtonCta
              text="Registrarse"
              type="submit"
            />
            <Link to="/">
              <button className="text-sm text-primary-500 hover:underline">
                Volver
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;

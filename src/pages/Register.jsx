import { Link } from 'react-router-dom';
import { useState } from 'react';

import ButtonCta from '../components/Buttons/ButtonCta';
import Logo from '../components/Logo';
import TitleOne from '../components/Titles.jsx/TitleOne';

const Register = () => {
  const [newUser, setNewUser] = useState({
    email: '',
    emailError: false,
    password: '',
    repeatPassword: '',
    passwordErrorMatch: false,
    lengthError: false,
  });

  function validarCorreoElectronico(correo) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(correo);
  }

  const formHandler = (e, password, repeatPassword) => {
    e.preventDefault();

    if (!validarCorreoElectronico(newUser.email)) {
      setNewUser({
        ...newUser,
        emailError: true,
        passwordErrorMatch: false,
        lengthError: false,
      });
      return;
    }

    if (password !== repeatPassword) {
      setNewUser({
        ...newUser,
        emailError: true,
        passwordErrorMatch: true,
        lengthError: false,
      });
      return;
    }

    if (password.length < 8 || password.length > 15) {
      setNewUser({
        ...newUser,
        emailError: true,
        passwordErrorMatch: false,
        lengthError: true,
      });
      return;
    }

    setNewUser({
      ...newUser,
      emailError: false,
      passwordErrorMatch: false,
      lengthError: false,
    });
  };

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
        <form
          className="flex flex-col"
          onSubmit={e =>
            formHandler(e, newUser.password, newUser.repeatPassword)
          }
        >
          <div className="mb-5">
            <input
              className="w-full rounded-xl py-2 pl-2 focus:outline-none focus:ring focus:ring-primary-400"
              type="email"
              placeholder="Email"
              onChange={e => setNewUser({ ...newUser, email: e.target.value })}
              value={newUser.email}
            />
            <p
              className={`ml-2 mt-1 text-xs ${
                newUser.emailError ? 'block' : 'hidden'
              }`}
              style={{ color: 'red' }}
            >
              {newUser.emailError ? 'El correo electrónico no es válido' : ''}
            </p>
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
            <p
              className={`ml-2 mt-1 text-xs ${
                newUser.passwordErrorMatch
                  ? 'block'
                  : newUser.lengthError
                  ? 'block'
                  : 'hidden'
              }`}
              style={{ color: 'red' }}
            >
              {newUser.passwordErrorMatch
                ? 'Las contraseñas no coinciden'
                : newUser.lengthError
                ? 'La contraseña debe tener entre 8 y 15 caracteres'
                : ''}
            </p>
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

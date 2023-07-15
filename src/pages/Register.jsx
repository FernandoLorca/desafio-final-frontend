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
    emailError: false,
    passwordErrorMatch: false,
    lengthError: false,
    serverResponse: null,
  });

  const registerUser = async () => {
    try {
      const res = await fetch(
        import.meta.env.VITE_API_URL + '/users/register',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: newUser.email,
            password: newUser.password,
          }),
        }
      );
      const data = await res.json();
      setNewUser({
        ...newUser,
        serverResponse: res.status,
      });
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const formHandler = (e, email, password, repeatPassword) => {
    e.preventDefault();

    // Email validation with regex
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const validation = regex.test(email);
    if (!validation) {
      setNewUser({
        ...newUser,
        emailError: true,
        passwordErrorMatch: false,
        lengthError: false,
      });
      return;
    } else if (validation) {
      setNewUser({
        ...newUser,
        emailError: false,
        passwordErrorMatch: false,
        lengthError: false,
      });
    }

    // Password validation
    if (password !== repeatPassword) {
      setNewUser({
        ...newUser,
        emailError: false,
        passwordErrorMatch: true,
        lengthError: false,
      });
      return;
    }

    // Password length validation
    if (password.length < 8 || password.length > 20) {
      setNewUser({
        ...newUser,
        emailError: false,
        passwordErrorMatch: false,
        lengthError: true,
      });
      return;
    }

    // If all validations are passed, then the user is created
    setNewUser({
      ...newUser,
      emailError: false,
      passwordErrorMatch: false,
      lengthError: false,
    });

    registerUser();
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
            formHandler(
              e,
              newUser.email,
              newUser.password,
              newUser.repeatPassword
            )
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
                ? 'La contraseña debe tener entre 8 y 20 caracteres'
                : ''}
            </p>
            <p
              className={`ml-2 mt-1 text-xs ${
                newUser.serverResponse === null && 'hidden'
              }`}
              style={
                newUser.serverResponse === 200 || newUser.serverResponse === 201
                  ? { color: 'green' }
                  : { color: 'red' }
              }
            >
              {newUser.serverResponse === 200 || newUser.serverResponse === 201
                ? 'Usuario creado correctamente'
                : 'Hubo un error al crear el usuario'}
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

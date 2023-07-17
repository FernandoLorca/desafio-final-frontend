import { useNavigate } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';

import { AuthContext } from '../context/AuthContext';

import ButtonCta from '../components/Buttons/ButtonCta';
import Logo from '../components/Logo';
import TitleOne from '../components/Titles.jsx/TitleOne';

const Login = () => {
  const navigate = useNavigate();
  const { token, saveToken, user, saveUser } = useContext(AuthContext);
  const [email, setEmail] = useState('test2@gmail.com');
  const [password, setPassword] = useState('12345678');

  useEffect(() => {
    if (token && user) {
      navigate('/');
    }
  }, [token, user, navigate]);

  const getToken = async () => {
    try {
      const res = await fetch(import.meta.env.VITE_API_URL + '/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const { token } = await res.json();
      saveToken(token);
    } catch (error) {
      console.error(error);
    }
  };

  const getUser = async () => {
    try {
      const res = await fetch(import.meta.env.VITE_API_URL + '/users/user', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      saveUser(data);
    } catch (error) {
      console.error(error);
    }
  };

  const formHandler = async e => {
    e.preventDefault();
    await getToken();
    await getUser();
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
          title="Ingresa a tu cuenta"
          classProperty="text-xl"
        />
        <form
          className="flex flex-col"
          onSubmit={formHandler}
        >
          <div className="mb-5">
            <input
              className="w-full rounded-xl py-2 pl-2 focus:outline-none focus:ring focus:ring-primary-400"
              type="text"
              placeholder="Email"
              onChange={e => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="mb-5">
            <input
              className="w-full rounded-xl py-2 pl-2 focus:outline-none focus:ring focus:ring-primary-400"
              type="password"
              placeholder="Contraseña"
              onChange={e => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <div className="lg:w-1/4">
            <ButtonCta
              text="Ingresar"
              type="submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

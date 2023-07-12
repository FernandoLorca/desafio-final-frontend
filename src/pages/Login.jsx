import { useState, useContext } from 'react';

import { AuthContext } from '../context/AuthContext';

import ButtonCta from '../components/Buttons/ButtonCta';
import Input from '../components/Form/Input';
import Logo from '../components/Logo';
import TitleOne from '../components/Titles.jsx/TitleOne';

const Login = () => {
  const { saveToken, getUserProfile } = useContext(AuthContext);

  const [email, setEmail] = useState('john@mail.com');
  const [password, setPassword] = useState('changeme');

  const getData = async () => {
    try {
      const res = await fetch(import.meta.env.VITE_API_URL + '/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const { access_token } = await res.json();
      saveToken(access_token);
      await getUserProfile(access_token);
    } catch (error) {
      console.error(error);
    }
  };

  const formHandler = e => {
    e.preventDefault();
    getData();
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
          <Input
            inputType="text"
            inputPlaceholder="Correo"
          />
          <Input
            inputType="password"
            inputPlaceholder="Contraseña"
          />
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

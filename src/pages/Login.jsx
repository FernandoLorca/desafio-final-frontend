import ButtonCta from '../components/Buttons/ButtonCta';
import TitleOne from '../components/Titles.jsx/TitleOne';

const Login = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-primary-900 bg-[url('/hero.webp')] bg-cover bg-[center_left_-30rem] bg-no-repeat text-dark-800 md:bg-[center_left_-18rem] lg:bg-center">
      <div className="mx-10 flex w-full flex-col rounded-xl bg-dark-100 p-10">
        <TitleOne
          title="Ingresa a tu cuenta"
          classProperty="text-2xl"
        />
        <form className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Correo"
          />
          <input
            type="password"
            placeholder="Contraseña"
          />
          <ButtonCta
            text="Ingresar"
            textSize="text-dark-100"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;

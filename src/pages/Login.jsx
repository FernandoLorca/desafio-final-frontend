import ButtonCta from '../components/Buttons/ButtonCta';
import Input from '../components/Form/Input';
import Logo from '../components/Logo';
import TitleOne from '../components/Titles.jsx/TitleOne';

const Login = () => {
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
        <form className="flex flex-col">
          <Input
            inputType="text"
            inputPlaceholder="Correo"
          />
          <Input
            inputType="password"
            inputPlaceholder="Contraseña"
          />
          <ButtonCta
            text="Ingresar"
            textSize="text-dark-100"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;

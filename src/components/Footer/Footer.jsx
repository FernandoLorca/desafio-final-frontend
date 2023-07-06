import Logo from '../Logo';

const Footer = () => {
  return (
    <div className="bg-gradient-to-b from-primary-800 to-primary-900 px-5 py-10">
      <Logo
        logoSize="max-w-[4rem]"
        fontSize="text-2xl"
      />
      <h2>Perfil</h2>
      <a href="#">Entrar</a>
      <a href="#">Registrarse</a>
    </div>
  );
};

export default Footer;

import ButtonCta from '../Buttons/ButtonCta';
import ButtonPassive from '../Buttons/ButtonPassive';

const NavbarPublicButtons = () => {
  return (
    <div className="hidden gap-2 lg:flex">
      <ButtonPassive
        text="Entrar"
        toHref="/login"
      />
      <ButtonCta text="Registrate" />
    </div>
  );
};

export default NavbarPublicButtons;

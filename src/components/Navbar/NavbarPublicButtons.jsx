import { Link } from 'react-router-dom';

import ButtonCta from '../Buttons/ButtonCta';
import ButtonPassive from '../Buttons/ButtonPassive';

const NavbarPublicButtons = () => {
  return (
    <div className="hidden gap-2 lg:flex">
      <ButtonPassive
        text="Entrar"
        toHref="/login"
      />
      <Link to="/register">
        <ButtonCta text="Registrate" />
      </Link>
    </div>
  );
};

export default NavbarPublicButtons;

import ButtonCta from '../Buttons/ButtonCta';
import ButtonPassive from '../Buttons/ButtonPassive';
import NavbarListItem from './NavbarListItem';

const NavbarListMobile = ({ menu }) => {
  return (
    <nav className={menu ? 'block' : 'hidden'}>
      <div className="flex justify-center gap-5 pt-28">
        <ButtonPassive text="Entrar" />
        <ButtonCta
          text="Registrate"
          textSize="text-xs"
        />
      </div>
      <ul className="flex flex-col items-center gap-14 pt-16">
        <NavbarListItem
          textSize="text-3xl"
          anchor="#"
          text="Inicio"
        />
        <NavbarListItem
          textSize="text-3xl"
          anchor="#"
          text="Placas madre"
        />
        <NavbarListItem
          textSize="text-3xl"
          anchor="#"
          text="Ram"
        />
        <NavbarListItem
          textSize="text-3xl"
          anchor="#"
          text="Alacenamiento"
        />
        <NavbarListItem
          textSize="text-3xl"
          anchor="#"
          text="Gabinetes"
        />
        <NavbarListItem
          textSize="text-3xl"
          anchor="#"
          text="Fuentes de poder"
        />
        <NavbarListItem
          textSize="text-3xl"
          anchor="#"
          text="Tarjetas de video"
        />
        <NavbarListItem
          textSize="text-3xl"
          anchor="#"
          text="Procesadores"
        />
      </ul>
    </nav>
  );
};

export default NavbarListMobile;

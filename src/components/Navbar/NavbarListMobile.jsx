import NavbarListItem from './NavbarListItem';

const NavbarListMobile = ({ menu }) => {
  return (
    <nav className={menu ? 'block' : 'hidden'}>
      <ul className="flex flex-col items-center gap-14 py-24 text-3xl">
        <NavbarListItem
          anchor="#"
          text="Inicio"
        />
        <NavbarListItem
          anchor="#"
          text="Placas madre"
        />
        <NavbarListItem
          anchor="#"
          text="Ram"
        />
        <NavbarListItem
          anchor="#"
          text="Alacenamiento"
        />
        <NavbarListItem
          anchor="#"
          text="Gabinetes"
        />
        <NavbarListItem
          anchor="#"
          text="Fuentes de poder"
        />
        <NavbarListItem
          anchor="#"
          text="Tarjetas de video"
        />
        <NavbarListItem
          anchor="#"
          text="Procesadores"
        />
      </ul>
    </nav>
  );
};

export default NavbarListMobile;

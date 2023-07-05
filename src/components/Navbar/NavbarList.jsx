import NavbarListItem from './NavbarListItem';

const NavbarList = () => {
  return (
    <nav className="hidden lg:block">
      <ul className="flex gap-5">
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

export default NavbarList;
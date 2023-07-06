import NavbarListItem from './NavbarListItem';

const NavbarList = () => {
  return (
    <nav className="hidden px-5 lg:block">
      <ul className="text flex gap-5">
        <NavbarListItem
          textSize="text-sm"
          anchor="#"
          text="Inicio"
        />
        <NavbarListItem
          textSize="text-sm"
          anchor="#"
          text="Placas madre"
        />
        <NavbarListItem
          textSize="text-sm"
          anchor="#"
          text="Ram"
        />
        <NavbarListItem
          textSize="text-sm"
          anchor="#"
          text="Ssd y Hdd"
        />
        <NavbarListItem
          textSize="text-sm"
          anchor="#"
          text="Gabinetes"
        />
        <NavbarListItem
          textSize="text-sm"
          anchor="#"
          text="Fuentes de poder"
        />
        <NavbarListItem
          textSize="text-sm"
          anchor="#"
          text="Tarjetas de video"
        />
        <NavbarListItem
          textSize="text-sm"
          anchor="#"
          text="Procesadores"
        />
      </ul>
    </nav>
  );
};

export default NavbarList;

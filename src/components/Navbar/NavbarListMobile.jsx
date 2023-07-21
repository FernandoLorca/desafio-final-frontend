import ButtonCta from '../Buttons/ButtonCta';
import ButtonPassive from '../Buttons/ButtonPassive';
import NavbarListItem from './NavbarListItem';
import NavbarPrivateButtons from './NavbarPrivateButtons';
import categories from '../Categories/categories.json';

const NavbarListMobile = ({ menu, user, setMenu }) => {
  const closeMenu = () => setMenu(false);

  return (
    <nav className={menu ? 'block' : 'hidden'}>
      <div className="flex flex-col gap-5 px-5 pt-28">
        {user && [user].length > 0 ? (
          <div className="flex justify-center lg:hidden">
            <NavbarPrivateButtons />
          </div>
        ) : (
          <>
            <ButtonPassive text="Entrar" />
            <ButtonCta text="Registrate" />
          </>
        )}
      </div>
      <ul className="flex flex-col items-center gap-14 pt-16">
        {categories.map(category => (
          <li
            className="flex items-center text-sm"
            key={category.id}
          >
            <NavbarListItem
              menu={menu}
              closeMenu={closeMenu}
              category={category}
              text={category.name}
              currentPath={location.pathname}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavbarListMobile;

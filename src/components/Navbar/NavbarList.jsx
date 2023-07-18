import NavbarListItem from './NavbarListItem';
import categories from '../Categories/categories.json';
import { Link, useLocation } from 'react-router-dom';

const NavbarList = () => {
  const location = useLocation();

  return (
    <nav className="hidden px-5 lg:block">
      <ul className="text flex gap-5">
        <li className="flex items-center text-sm">
          <Link to="/">Inicio</Link>
        </li>
        {categories.map(category => (
          <li
            className="flex items-center text-sm"
            key={category.id}
          >
            <NavbarListItem
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

export default NavbarList;

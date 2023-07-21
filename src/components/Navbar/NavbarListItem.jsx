import { Link } from 'react-router-dom';

const NavbarListItem = ({ text, category, currentPath }) => {
  const name = category && category.name;
  const path = category && name.toLowerCase().split(' ').join('-');

  const isActive = currentPath === `/${path}`;

  return (
    <Link
      className={`hover:underline ${isActive ? 'underline' : ''}`}
      to={`/category/${path}`}
    >
      {text}
    </Link>
  );
};

export default NavbarListItem;

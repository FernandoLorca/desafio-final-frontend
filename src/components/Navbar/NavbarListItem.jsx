import { Link } from 'react-router-dom';

const NavbarListItem = ({ text, textSize, anchor }) => {
  return (
    <li className={`flex items-center ${textSize}`}>
      <Link
        className="hover:underline"
        to={anchor}
      >
        {text}
      </Link>
    </li>
  );
};

export default NavbarListItem;

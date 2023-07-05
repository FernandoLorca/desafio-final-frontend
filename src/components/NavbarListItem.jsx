const NavbarListItem = ({ text, anchor }) => {
  return (
    <li>
      <a href={anchor}>{text}</a>
    </li>
  );
};

export default NavbarListItem;

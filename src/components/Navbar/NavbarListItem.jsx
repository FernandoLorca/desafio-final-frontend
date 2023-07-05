const NavbarListItem = ({ text, anchor }) => {
  return (
    <li>
      <a
        className="hover:underline"
        href={anchor}
      >
        {text}
      </a>
    </li>
  );
};

export default NavbarListItem;

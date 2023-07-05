const NavbarListItem = ({ text, textSize, anchor }) => {
  return (
    <li className={`flex items-center ${textSize}`}>
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

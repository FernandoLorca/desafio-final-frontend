import { BsList } from 'react-icons/bs';

const Navbar = ({ onClick }) => {
  return (
    <div className="flex items-center justify-between px-5 py-2 ">
      <img
        src="/logo.svg"
        alt=""
        className="w-16"
      />
      <button onClick={onClick}>
        <BsList className="h-10 max-h-full w-10 max-w-full" />
      </button>
    </div>
  );
};

export default Navbar;

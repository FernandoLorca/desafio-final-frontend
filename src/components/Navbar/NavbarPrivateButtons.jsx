import { BsFillCartFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const NavbarPrivateButtons = ({ user }) => {
  let userId;
  user && [user].length > 0 ? (userId = user.id) : null;

  return (
    <div className="flex gap-10 lg:gap-5">
      <Link
        to="/carro"
        className="flex items-center gap-2 hover:opacity-80"
      >
        <div className="flex h-12 w-12 items-center justify-center text-4xl lg:h-8 lg:w-8 lg:text-2xl">
          <BsFillCartFill />
        </div>
        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-dark-100 text-sm text-dark-800">
          <p>0</p>
        </div>
      </Link>
      <div className="flex items-center">
        <div className="hover:text-primary-500 hover:underline">
          <Link to={`/perfil/${user && [user].length > 0 && userId}`}>
            Mi perfil
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavbarPrivateButtons;

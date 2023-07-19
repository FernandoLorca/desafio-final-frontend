import NavbarMain from '../components/Navbar/NavbarMain';
import TitleOne from '../components/Titles.jsx/TitleOne';
import TitleTwo from '../components/Titles.jsx/TitleTwo';
import Footer from '../components/Footer/Footer';

const Profile = () => {
  return (
    <div>
      <NavbarMain />
      <ul className="px-5 py-5">
        <li className="mb-3">
          <TitleOne
            title="Perfil"
            classProperty="mb-0 text-2xl"
          />
          <p>Usuario</p>
        </li>
        <li className="mb-3">
          <TitleTwo
            title="Nombre"
            textSize="mb-0"
          />
          <p>Agregar información</p>
        </li>
        <li className="mb-3">
          <TitleTwo
            title="Email"
            textSize="mb-0"
          />
          <p>Agregar información</p>
        </li>
        <li className="mb-3">
          <TitleTwo
            title="Número de teléfono"
            textSize="mb-0"
          />
          <p>Agregar información</p>
        </li>
      </ul>
      <div className="-mt-10">
        <Footer />
      </div>
    </div>
  );
};

export default Profile;

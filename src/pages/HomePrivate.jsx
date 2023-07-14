import Hero from '../components/Hero/Hero';
import NavbarPrivateButtons from '../components/Navbar/NavbarPublicButtons';
import Categories from '../components/Categories/Categories';
import Products from '../components/Products/Products';
import Footer from '../components/Footer/Footer';

const HomePrivate = () => {
  return (
    <div className="text-dark-800">
      <h1>PRIVADO</h1>
      <Hero
        heroBackground="bg-[url('/hero.webp')]"
        heroTitle="Las mejores ofertas en productos electrónicos"
        heroSubTitle="La tienda con mas ofertas en Chile en productos electrónicos"
        navbarAuthButtons={<NavbarPrivateButtons />}
      />
      <Categories />
      <Products title="Tarjetas de video" />
      <Products title="Ssd y Hdd" />
      <Products title="Procesadores" />
      <Footer />
    </div>
  );
};

export default HomePrivate;

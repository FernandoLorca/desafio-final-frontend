import Hero from '../components/Hero/Hero';
import Categories from '../components/Categories/Categories';
import Products from '../components/Products/Products';
import Footer from '../components/Footer/Footer';

const HomePublic = () => {
  return (
    <div className="text-dark-800">
      <Hero heroBackground="bg-[url('/hero.webp')]" />
      <Categories />
      <Products title="Tarjetas de video" />
      <Products title="Ssd y Hdd" />
      <Products title="Procesadores" />
      <Footer />
    </div>
  );
};

export default HomePublic;
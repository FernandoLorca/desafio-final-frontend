import Hero from './components/Hero/Hero';
import Categories from './components/Categories/Categories';
import Products from './components/Products/Products';

const App = () => {
  return (
    <div className="text-dark-800">
      <Hero />
      <Categories />
      <Products title="Tarjetas de video" />
      <Products title="Ssd y Hdd" />
      <Products title="Procesadores" />
    </div>
  );
};

export default App;

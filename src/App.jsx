import Hero from './components/Hero/Hero';
import Categories from './components/Categories/Categories';
import Products from './components/Products/Products';

const App = () => {
  return (
    <div className="text-dark-800">
      <Hero />
      <Categories />
      <Products title="Tarjetas de video" />|{' '}
    </div>
  );
};

export default App;

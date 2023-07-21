import { useState, useEffect } from 'react';
import AuthProvider from '../context/AuthContext';

import Hero from '../components/Hero/Hero';
import Categories from '../components/Categories/Categories';
import Products from '../components/Products/Products';
import Footer from '../components/Footer/Footer';

const HomePublic = () => {
  const [videoCards, setVideoCards] = useState([]);
  const [storage, setStorage] = useState([]);
  const [processor, setProcessor] = useState([]);

  const getVideoCards = async () => {
    try {
      const res = await fetch(
        import.meta.env.VITE_API_URL + '/products/category/tarjetas-video'
      );
      const data = await res.json();
      setVideoCards(data);
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const getStorage = async () => {
    try {
      const res = await fetch(
        import.meta.env.VITE_API_URL + '/products/category/discos'
      );
      const data = await res.json();
      setStorage(data);
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const getProcessors = async () => {
    try {
      const res = await fetch(
        import.meta.env.VITE_API_URL + '/products/category/procesadores'
      );
      const data = await res.json();
      setProcessor(data);
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  useEffect(() => {
    getVideoCards();
    getStorage();
    getProcessors();
  }, []);

  return (
    <div className="text-dark-800">
      <AuthProvider>
        <Hero
          heroBackground="bg-[url('/hero.webp')]"
          heroTitle="Las mejores ofertas en productos electrónicos"
          heroSubTitle="La tienda con mas ofertas en Chile en productos electrónicos"
        />
      </AuthProvider>
      <Categories />
      {videoCards && videoCards.length > 0 && (
        <Products
          title="Tarjetas de video"
          products={videoCards}
        />
      )}
      <Products
        title="Ssd y Hdd"
        products={storage}
      />
      <Products
        title="Procesadores"
        products={processor}
      />
      <Footer />
    </div>
  );
};

export default HomePublic;

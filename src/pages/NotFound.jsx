import Hero from '../components/Hero/Hero';

const NotFound = () => {
  return (
    <Hero
      heroBackground="bg-[url('/hero.webp')]"
      heroTitle="Página no encontrada"
      heroSubTitle="La página que buscas no existe"
      displayButton="hidden"
    />
  );
};

export default NotFound;

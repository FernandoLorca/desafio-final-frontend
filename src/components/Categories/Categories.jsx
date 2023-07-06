import Categorie from './Categorie';

const Categories = () => {
  return (
    <div className="px-5 pt-10 lg:w-full">
      <h2 className="mb-5 text-4xl font-bold md:px-16">Categorias</h2>
      <div className="grid grid-cols-2 grid-rows-[10rem_10rem_10rem_10rem] gap-5 text-center md:grid-cols-4 md:grid-rows-[10rem_10rem] md:px-16 lg:flex lg:h-32 lg:justify-between">
        <Categorie
          title="Placas madre"
          bgConfig="bg-[url('/categories/mother.webp')] bg-repeat bg-center bg-cover"
        />
        <Categorie
          title="Ram"
          bgConfig="bg-[url('/categories/ram.webp')] bg-repeat bg-center bg-cover"
        />
        <Categorie
          title="Ssd y Hdd"
          bgConfig="bg-[url('/categories/ssd.webp')] bg-repeat bg-center bg-cover"
        />
        <Categorie
          title="Gabinetes"
          bgConfig="bg-[url('/categories/gabinetes.webp')] bg-repeat bg-center bg-cover"
        />
        <Categorie
          title="Fuentes de poder"
          bgConfig="bg-[url('/categories/fuente.webp')] bg-repeat bg-center bg-cover"
        />
        <Categorie
          title="Tarjetas de video"
          bgConfig="bg-[url('/categories/video.webp')] bg-repeat bg-center bg-cover"
        />
        <Categorie
          title="Procesadores"
          bgConfig="bg-[url('/categories/proce.webp')] bg-repeat bg-center bg-cover"
        />
      </div>
    </div>
  );
};

export default Categories;

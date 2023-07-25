import TitleTwo from '../Titles/TitleTwo';
import Categorie from './Categorie';
import categories from '../Categories/categories.json';

const Categories = () => {
  return (
    <div className="px-5 pt-10 lg:w-full">
      <div className="md:px-16">
        <TitleTwo
          title="Categorias"
          textSize="text-4xl"
        />
      </div>
      <div className="grid grid-cols-2 grid-rows-[10rem_10rem_10rem_10rem] gap-5 text-center md:grid-cols-4 md:grid-rows-[10rem_10rem] md:px-16 lg:flex lg:h-32 lg:justify-between">
        {categories.map(categorie => (
          <Categorie
            key={categorie.id}
            title={categorie.name}
            categorie={categorie}
          />
        ))}
      </div>
    </div>
  );
};

export default Categories;

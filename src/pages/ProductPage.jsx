import React from 'react';

import NavbarMain from '../components/Navbar/NavbarMain';
import Footer from '../components/Footer/Footer';
import TitleOne from '../components/Titles.jsx/TitleOne';
import TitleTwo from '../components/Titles.jsx/TitleTwo';
import ButtonCta from '../components/Buttons/ButtonCta';

const ProductPage = () => {
  return (
    <>
      <NavbarMain />
      <div>
        <img
          src=""
          alt=""
        />
      </div>
      <div>
        <TitleOne title="Titulo" />
        <p>Categoría: Almacenamiento</p>
        <p>Stock: 56</p>
      </div>
      <TitleTwo title="PRECIO" />
      <ButtonCta text="Comprar" />
      <Footer />
    </>
  );
};

export default ProductPage;

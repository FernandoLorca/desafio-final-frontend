import { useContext } from 'react';

import { AuthContext } from '../context/AuthContext';
import { CartContext } from '../context/CartContext';

import NavbarMain from '../components/Navbar/NavbarMain';
import TitleTwo from '../components/Titles/TitleTwo';
import Footer from '../components/Footer/Footer';
import ButtonCta from '../components/Buttons/ButtonCta';

const Cart = () => {
  const { user } = useContext(AuthContext);
  const { productBuy } = useContext(CartContext);

  // Desde acá me traigo el producto que guarde en el back y lo muestro acá

  return (
    <>
      <NavbarMain user={user} />
      <div className="flex h-screen justify-center">
        <div className="m-5 flex h-fit w-full flex-grow flex-col gap-5 rounded-xl border-2 border-dark-100 p-5 md:mx-16 lg:max-w-lg">
          <div className="flex items-center justify-between gap-3">
            <div className="h-16 w-16 rounded-md bg-dark-200">
              <img
                src=""
                alt=""
              />
            </div>
            <div>
              <TitleTwo
                title="Nombre del producto"
                textSize="-mb-0"
              />
              <p>$34.990</p>
            </div>
            <div className="flex h-full w-24 flex-col gap-1">
              <div className="flex items-center justify-center gap-2">
                <a
                  href="#"
                  className="hover:text-white rounded-full border border-dark-500 px-2 text-dark-500 hover:border-dark-100 hover:bg-dark-500 hover:text-dark-100"
                >
                  {'<'}
                </a>
                <p className="text-lg">1</p>
                <a
                  href="#"
                  className="hover:text-white rounded-full border border-dark-500 px-2 text-dark-500 hover:border-dark-100 hover:bg-dark-500 hover:text-dark-100"
                >
                  {'>'}
                </a>
              </div>
              <div className="text-center">
                <p className="font-bold">Total:</p>
                <p>$34.990</p>
              </div>
            </div>
          </div>
          <div>
            <ButtonCta text="Finalizar Compra" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;

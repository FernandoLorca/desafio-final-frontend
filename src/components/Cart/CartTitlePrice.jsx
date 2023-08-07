import { useContext, useEffect, useState } from 'react';
import { ProductsContext } from '../../context/ProductsContext';
import TitleTwo from '../Titles/TitleTwo';

const CartTitlePrice = ({ cartProduct, product, formatPrice}) => {

  const { getProduct } = useContext(ProductsContext);
  const [ productName, setProductName ] = useState();
  const [ productPrice, setProductPrice ] = useState();

  const getProductName = async () => {
    const productServ = await getProduct(product.product_id);
    setProductName(productServ.product_name);
    setProductPrice(productServ.price);
  };

  useEffect(() => {
    getProductName();
  }, [])

  return (
    <div>
      <TitleTwo
        title={productName}
        textSize="-mb-1 text-primary-500"
      />
      <p>$
        {productPrice && formatPrice(productPrice)}
      </p>
    </div>
  );
};

export default CartTitlePrice;

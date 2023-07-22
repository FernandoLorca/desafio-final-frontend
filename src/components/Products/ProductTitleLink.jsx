import { Link } from 'react-router-dom';

const ProductTitle = ({ productTitle, extraClasses, href }) => {
  return (
    <Link
      to={href}
      className="text-primary-600 hover:underline"
    >
      <h3 className={`text-xl font-bold ${extraClasses}`}>{productTitle}</h3>
    </Link>
  );
};

export default ProductTitle;

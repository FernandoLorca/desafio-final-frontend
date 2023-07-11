import { Link } from 'react-router-dom';

const ButtonPassive = ({ text, classProperty, toHref }) => {
  return (
    <Link to={toHref}>
      <button
        className={`w-full rounded-full border border-primary-100 px-6 py-3 text-lg hover:border hover:border-primary-600 hover:bg-primary-600 hover:text-secondary-100 lg:py-1 lg:text-sm ${classProperty}`}
      >
        {text}
      </button>
    </Link>
  );
};

export default ButtonPassive;

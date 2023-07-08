import { Link } from 'react-router-dom';

const ButtonPassive = ({ text, toHref }) => {
  return (
    <Link to={toHref}>
      <button className="max-w-max rounded-full border border-primary-100 px-6 py-1 text-xs hover:border hover:border-primary-600 hover:bg-primary-600 hover:text-secondary-100">
        {text}
      </button>
    </Link>
  );
};

export default ButtonPassive;

import { Link } from 'react-router-dom';

const ButtonLink = ({ text, href, fontSize }) => {
  return (
    <div>
      <Link
        to={href}
        className={`underline hover:text-primary-500 ${fontSize}`}
      >
        {text}
      </Link>
    </div>
  );
};

export default ButtonLink;

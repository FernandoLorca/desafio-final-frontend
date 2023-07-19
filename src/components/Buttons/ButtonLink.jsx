const ButtonLink = ({ text, href, fontSize }) => {
  return (
    <div>
      <a
        href={href}
        className={`underline hover:text-primary-500 ${fontSize}`}
      >
        {text}
      </a>
    </div>
  );
};

export default ButtonLink;

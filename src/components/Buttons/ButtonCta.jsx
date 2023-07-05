const ButtonCta = ({ text, textSize }) => {
  return (
    <button
      className={`max-w-max rounded-full bg-gradient-to-br from-primary-600 to-secondary-700 px-6 py-1 hover:bg-gradient-to-br hover:from-primary-700 hover:to-secondary-600 ${textSize}`}
    >
      {text}
    </button>
  );
};

export default ButtonCta;

const ButtonCta = ({ text, textSize, buttonType = '' }) => {
  return (
    <button
      className={`rounded-full bg-gradient-to-br from-primary-600 to-secondary-700 px-6 py-3 text-lg hover:bg-gradient-to-br hover:from-primary-700 hover:to-secondary-600 lg:py-1 ${textSize}`}
      type={buttonType}
      >
      {text}
    </button>
  );
};

export default ButtonCta;

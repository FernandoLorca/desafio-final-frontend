const ButtonCta = ({ text, buttonType = '', onclick, customStyle }) => {
  return (
    <button
      className={`w-full rounded-full bg-gradient-to-br from-primary-600 to-secondary-700 px-6 py-3 text-lg text-dark-100 hover:bg-gradient-to-br hover:from-primary-700 hover:to-secondary-600 lg:py-2 lg:text-sm ${customStyle}`}
      type={buttonType}
      onClick={onclick}
    >
      {text}
    </button>
  );
};

export default ButtonCta;

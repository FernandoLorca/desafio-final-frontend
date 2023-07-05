const ButtonCta = ({ text }) => {
  return (
    <button className="rounded-full bg-gradient-to-br from-primary-600 to-secondary-700 px-5 py-4 hover:bg-gradient-to-br hover:from-primary-700 hover:to-secondary-600">
      {text}
    </button>
  );
};

export default ButtonCta;

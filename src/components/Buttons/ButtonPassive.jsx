const ButtonPassive = ({ text, classProperty }) => {
  return (
    <button
      className={`rounded-full border border-primary-100 px-6 py-3 text-lg hover:border hover:border-primary-600 hover:bg-primary-600 hover:text-secondary-100 lg:py-1 ${classProperty}`}
    >
      {text}
    </button>
  );
};

export default ButtonPassive;

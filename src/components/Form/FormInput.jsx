const FormInput = ({ inputType, inputPlaceholder }) => {
  return (
    <input
      type={inputType}
      placeholder={inputPlaceholder}
      className="rounded-xl py-2 pl-4 focus:outline-none focus:ring focus:ring-primary-400"
    />
  );
};

export default FormInput;

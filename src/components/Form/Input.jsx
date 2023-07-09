const Input = ({ inputType, inputPlaceholder, inputValue, inputOnChange }) => {
  return (
    <input
      className="pl-X4 rounded-xl py-2 focus:outline-none focus:ring focus:ring-primary-400"
      type={inputType}
      placeholder={inputPlaceholder}
      onChange={inputOnChange}
      value={inputValue}
    />
  );
};

export default Input;

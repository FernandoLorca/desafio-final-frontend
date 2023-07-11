import { useState } from 'react';

const Input = ({
  inputType,
  inputPlaceholder,
  // inputError,
}) => {
  const [input, setInput] = useState('');
  const [inputError, setInputError] = useState('');

  const inputChangeHandler = e => {
    if (e.target.value.trim() !== '') {
      setInputError('');
    } else {
      setInputError('Este campo es requerido');
    }
    setInput(e.target.value);
  };

  return (
    <div className="mb-5">
      <input
        className="w-full rounded-xl py-2 pl-2 focus:outline-none focus:ring focus:ring-primary-400"
        type={inputType}
        placeholder={inputPlaceholder}
        onChange={inputChangeHandler}
        value={input}
      />
      <p
        className={`pl-2 pt-2 text-sm ${inputError === '' ? 'hidden' : ''}`}
        style={{ color: 'red' }}
      >
        {inputError}
      </p>
    </div>
  );
};

export default Input;

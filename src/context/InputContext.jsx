import { createContext, useState } from 'react';

export const InputContext = createContext();

const InputProvider = ({ children }) => {
  const [input, setInput] = useState('');

  const prueba = 'string';

  const updateInput = e => {
    setInput(e.target.value);
  };

  return (
    <InputContext.Provider value={(input, updateInput, prueba)}>
      {children}
    </InputContext.Provider>
  );
};

export default InputProvider;

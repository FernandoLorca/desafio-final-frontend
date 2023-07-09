import { useContext } from 'react';
import InputProvider from './InputContext';

export const useInputContext = () => useContext(InputProvider);

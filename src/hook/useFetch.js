import { useEffect, useState } from 'react';

export const useFetch = url => {
  const [data, setData] = useState([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setData(data);
      } catch (err) {
        setError(err);
      }
    };
  }, [url]);

  return { data, error };
};

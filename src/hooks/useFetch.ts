import { useEffect, useState } from 'react';
import axios from 'axios';

export const useFetch = <T>(url: string) => {
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    axios.get(url).then((res) => setData(res.data));
  }, [url]);

  return data;
};

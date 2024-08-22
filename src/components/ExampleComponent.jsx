import axiosInstance from '../axiosInstance';
import { useEffect, useState } from 'react';

const ExampleComponent = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get('/users');
        setData(response.data);
      } catch (error) {
        setError(error);
      }
    };
  }, []);

  if (error) {
    return <div> Error: {error.message}</div>;
  }

  if (!data) {
    return <div> Loading...</div>;
  }

  return <div> Data: {JSON.stringify(data)}</div>;
};

export default ExampleComponent;

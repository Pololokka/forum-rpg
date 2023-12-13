import { useState, useEffect } from 'react';

export type postType = {
  profilePic: string;
  user: string;
  createdAt: string;
  postContent: string;
};

function useFetch(url: string): [postType[], any] {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch(`${url}`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return [data, fetchData];
}

export default useFetch;

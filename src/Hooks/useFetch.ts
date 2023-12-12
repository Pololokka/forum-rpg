import { useState, useEffect } from 'react';

export type postType = {
  profilePic: string;
  user: string;
  createdAt: string;
  postContent: string;
};

const useFetch = (url: string): [postType[]] | [null] => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`${url}`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, [url]);
  console.log(data);
  return [data];
};

export default useFetch;

// não funciona, e eu não sei como fazer funcionar agora

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

  const postData = (userInfo: any, id: string, post: string, url: string) => {
    const data = {
      user: userInfo.name,
      profilePic: userInfo.img,
      group: id,
      postContent: post,
    };

    if (data.postContent != '') {
      fetch(`${url}`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .catch((error) => console.log(error))
        .then(fetchData);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  const reFetch = () => fetchData();

  return [data, { reFetch, postData }];
}

export default useFetch;

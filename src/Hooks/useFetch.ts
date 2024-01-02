import { useState, useEffect } from 'react';

export type postType = {
  profilePic: string;
  user: string;
  createdAt: string;
  postContent: string;
};

function useFetch(url: string): [postType[], number, number[], any] {
  const [data, setData] = useState([]);
  const [pages, setPages] = useState(0);
  const [pageArray, setPageArray] = useState([0]);

  const fetchData = () => {
    fetch(`${url}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.payload);
        setPages(data.totalPages);

        let arr = [];
        for (let i = 0; i < data.totalPages; i++) {
          arr.push(i + 1);
        }
        setPageArray(arr);
      })
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

  return [data, pages, pageArray, { reFetch, postData }];
}

export default useFetch;

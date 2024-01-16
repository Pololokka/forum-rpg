export type postType = {
  profilePic: string;
  user: string;
  createdAt: string;
  postContent: string;
};

export const fetchData = async (url: string, setState: any) => {
  fetch(`${url}`)
    .then((res) => res.json())
    .then((data) => setState(data))
    .catch((error) => console.log(error));
};

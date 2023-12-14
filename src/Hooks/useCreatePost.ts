const useCreatePosts = (
  userInfo: any,
  id: string,
  post: string,
  url: string,
) => {
  const data = {
    user: userInfo.name,
    profilePic: userInfo.img,
    group: id,
    postContent: post,
  };

  const postData = () => {
    if (data.postContent != '') {
      fetch(`${url}`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .catch((error) => console.log(error))
        .then();
    }
  };

  return [postData];
};

export default useCreatePosts;

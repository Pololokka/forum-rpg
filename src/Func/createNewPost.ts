export const createNewPost = async (
  userInfo: any,
  id: string,
  post: string,
  url: string,
) => {
  const postData = {
    user: userInfo.name,
    profilePic: userInfo.img,
    group: id,
    postContent: post,
  };

  try {
    const connect = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    if (!connect.ok) {
      throw new Error(
        'Não foi possível fazer o post, tente novamente mais tarde',
      );
    }

    const convertedConnection = await connect.json();
    return convertedConnection;
  } catch (error) {
    console.log(error);
  }
};

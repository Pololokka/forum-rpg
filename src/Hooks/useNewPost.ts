import { useState } from 'react';

const useNewPost = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
  const [newPost, setNewPost] = useState('');
  setNewPost(event.target.value);
  console.log(newPost);

  return { newPost };
};

export default useNewPost;

// não funciona, e eu não sei como fazer funcionar agora

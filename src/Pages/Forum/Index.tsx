import './Styles.css';
import { ForumBarData } from '../../Data/SideBarData';

import Card from '../../Components/Card/Index';
import SideBar from '../../Components/SideBar/Index';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { UserConsumer } from '../../Contexts/User';

const defaultPost: {
  profilePic: string;
  user: string;
  createdAt: string;
  postContent: string;
} = {
  profilePic: '',
  user: '',
  createdAt: '',
  postContent: '',
};

const Forum = () => {
  const { userInfo }: any = UserConsumer();
  const [newPostText, setNewPostText] = useState('');
  const [posts, setPosts] = useState([defaultPost]);

  const { id }: any = useParams();

  const getForumPosts = async (url: string) => {
    fetch(`${url}`)
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((error) => console.log(error));
  };

  const handleSubmitPost = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    createNewPost(newPostText);
    setNewPostText('');
    // getForumPosts(id);
  };

  const createNewPost = async (post: string) => {
    const postData = {
      user: userInfo.name,
      profilePic: userInfo.img,
      group: id,
      postContent: post,
    };

    try {
      const connect = await fetch(
        `https://forum-rpg-back.onrender.com/api/forum`,
        {
          method: 'POST',
          body: JSON.stringify(postData),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        },
      );

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

  const handleForumChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewPostText(event.target.value);
  };

  useEffect(() => {
    getForumPosts(`https://forum-rpg-back.onrender.com/api/forum/posts/${id}`);
    // useFetch(`https://forum-rpg-back.onrender.com/api/forum/posts/${id}`);
  }, []);

  return (
    <main className="main__forum">
      <h1 className="font-title font-big forum__title">Fórum de Discussões</h1>

      <SideBar arrayData={ForumBarData} />

      <section>
        {posts.map((element: any, index: number) => {
          return (
            <Card
              key={index}
              photo={element.profilePic}
              user={element.user}
              date={element.createdAt
                .split('T')[0]
                .split('-')
                .reverse()
                .join('-')}
              postContent={element.postContent}
            />
          );
        })}
      </section>

      <section>
        <form
          className="form__new-post"
          onSubmit={(event) => handleSubmitPost(event)}
        >
          <label htmlFor="newPost" className="font-title font-med">
            Novo Post
          </label>
          <textarea
            name="newPost"
            id="newPost"
            cols={1}
            rows={5}
            className="font-input font-med input-field new-post__text-area"
            value={newPostText || ''}
            onChange={(event) => handleForumChange(event)}
          ></textarea>

          <input
            type="submit"
            value="Postar!"
            className="font-title font-med input-button-positive"
          />
        </form>
      </section>
    </main>
  );
};

export default Forum;

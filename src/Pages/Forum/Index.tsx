import './Styles.css';
import { ForumBarData } from '../../Data/SideBarData';

import Card from '../../Components/Card/Index';
import SideBar from '../../Components/SideBar/Index';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

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
  const [newPostText, setNewPostText] = useState('');
  const [posts, setPosts] = useState([defaultPost]);

  const { id }: any = useParams();

  const getForumPosts = async (forumId: string) => {
    try {
      const connect = await fetch(
        `https://forum-rpg-back.onrender.com/api/forum/posts/${forumId}`,
        {
          method: 'GET',
          headers: { 'Content-type': 'application/json; charset=UTF-8' },
        },
      );

      if (!connect.ok) {
        throw new Error('Posts não encontrados');
      }

      const convertedConnection = await connect.json();
      setPosts(convertedConnection);
      return convertedConnection;
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmitPost = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  // const createNewPost = () => {

  // };

  const handleForumChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewPostText(event.target.value);
  };

  useEffect(() => {
    getForumPosts(id);
  }, []);

  return (
    <main className="main__forum">
      <h1 className="font-title font-big forum__title">Fórum de Discussões</h1>

      <SideBar arrayData={ForumBarData} />

      <section>
        {posts.map((element, index) => {
          return (
            <Card
              key={index}
              photo={element.profilePic}
              user={element.user}
              date={element.createdAt}
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

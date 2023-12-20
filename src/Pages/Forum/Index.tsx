import './Styles.css';
import { ForumBarData } from '../../Data/SideBarData';

import Card from '../../Components/Card/Index';
import SideBar from '../../Components/SideBar/Index';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { UserConsumer } from '../../Contexts/User';
import useFetch from '../../Hooks/useFetch';

const Forum = () => {
  const { id }: any = useParams();
  const { userInfo }: any = UserConsumer();

  const [newPostText, setNewPostText] = useState('');
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(10);

  const [posts, pages, { reFetch, postData }] = useFetch(
    `https://forum-rpg-back.onrender.com/api/forum/posts/${id}?offset=${offset}&limit=${limit}`,
  );

  const handleSubmitPost = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    postData(
      userInfo,
      id,
      newPostText,
      `https://forum-rpg-back.onrender.com/api/forum`,
    );
    setNewPostText('');
  };

  const handleForumChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewPostText(event.target.value);
  };

  useEffect(() => {
    reFetch(
      `https://forum-rpg-back.onrender.com/api/forum/posts/${id}?offset=${offset}&limit=${limit}`,
    );
  }, [newPostText]);

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

      <section className="page-numbers">
        <p
          className="font-text font-small outer-card number__card"
          onClick={() => setOffset(offset - 1 * 10)}
        >
          {'<'}
        </p>

        <p
          className="font-text font-small outer-card number__card"
          onClick={() => setOffset(0 * 10)}
        >
          {0 + 1}
        </p>

        <p
          className="font-text font-small outer-card number__card"
          onClick={() => setOffset(1 * 10)}
        >
          {1 + 1}
        </p>

        <p
          className="font-text font-small outer-card number__card"
          onClick={() => setOffset(offset + 1 * 10)}
        >
          {'>'}
        </p>
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

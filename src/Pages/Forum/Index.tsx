import './Styles.css';
import { ForumBarData } from '../../Data/SideBarData';

import Card from '../../Components/Card/Index';
import SideBar from '../../Components/SideBar/Index';
import PageCount from '../../Components/PageCount/Index';
import LimitChanger from '../../Components/LimitChanger/Index';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { UserConsumer } from '../../Contexts/User';
import useFetch from '../../Hooks/useFetch';

const Forum = () => {
  const { id }: any = useParams();
  const { userInfo }: any = UserConsumer();

  const [newPostText, setNewPostText] = useState('');
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(10);

  const [posts, pages, pageArray, { reFetch, postData }] = useFetch(
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
    setOffset((pages - 1) * 10);
    reFetch();
  };

  const handleForumChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewPostText(event.target.value);
  };

  return (
    <main className="main__forum">
      <h1 className="font-title font-big forum__title">Fórum de Discussões</h1>

      <SideBar arrayData={ForumBarData} />

      <section>
        {posts?.map((element: any, index: number) => {
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

      {pages > 1 && (
        <section className="changers-numbers">
          {offset != 0 && (
            <PageCount
              type="prev"
              content="<"
              offset={offset}
              limit={limit}
              setOffset={setOffset}
            />
          )}

          {pageArray?.map((element: any, index: number) => {
            return (
              <PageCount
                type="number"
                content={element}
                offset={offset}
                limit={limit}
                setOffset={setOffset}
                key={index}
              />
            );
          })}

          {offset != (pages - 1) * 10 && (
            <PageCount
              type="next"
              content=">"
              offset={offset}
              limit={limit}
              setOffset={setOffset}
            />
          )}
        </section>
      )}

      <section className="changers-numbers">
        <p className="font-text font-med">Posts por página: </p>
        <LimitChanger content="10" limit={limit} setLimit={setLimit} />
        <LimitChanger content="20" limit={limit} setLimit={setLimit} />
        <LimitChanger content="30" limit={limit} setLimit={setLimit} />
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

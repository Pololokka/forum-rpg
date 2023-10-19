import './Styles.css';
import { mockedData } from '../../Data/MockedData';

import Card from '../../Components/Card/Index';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

const Forum = () => {
  const [newPost, setNewPost] = useState('');

  const { id }: any = useParams();

  const handleSubmitPost = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleForumChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewPost(event.target.value);
    console.log(newPost);
  };

  return (
    <>
      <h1 className="font-title font-big forum__title">Fórum de Discussões</h1>

      <section>
        {mockedData[id].posts.map((element, index) => {
          return (
            <Card
              key={index}
              photo={element.photo}
              user={element.user}
              date={element.date}
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
            cols="1"
            rows="5"
            className="font-input font-med input-field new-post__text-area"
            value={newPost || ''}
            onChange={(event) => handleForumChange(event)}
          ></textarea>

          <input
            type="submit"
            value="Postar!"
            className="font-title font-med input-button-positive"
          />
        </form>
      </section>
    </>
  );
};

export default Forum;

import '../Styles.css';
import { ForumBarData } from '../../../Data/SideBarData';
import { mockedData } from '../../../Data/MockedData';

import Card from '../../../Components/Card/Index';
import SideBar from '../../../Components/SideBar/Index';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

const FurtherReading = () => {
  const [newPostText, setNewPostText] = useState('');

  const { id }: any = useParams();

  const handleSubmitPost = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleForumChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewPostText(event.target.value);
  };

  return (
    <main className="main__forum">
      <h1 className="font-title font-big forum__title">Leitura Geral</h1>

      <SideBar arrayData={ForumBarData} />

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

export default FurtherReading;

import './Styles.css';
import { mockedData } from '../../Data/MockedData';
import { ForumBarData } from '../../Data/SideBarData';

import Card from '../../Components/Card/Index';
import SideBar from '../../Components/SideBar/Index';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

const Forum = () => {
  const [newPostText, setNewPostText] = useState('');
  // const [newPost, setNewPost] = useState({});

  const { id }: any = useParams();

  const handleSubmitPost = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // createNewPost();
    //mockedData[id].posts.push(newPost);
  };

  // const createNewPost = () => {
  //   setNewPost({
  //     photo:
  //       'https://cdn.discordapp.com/attachments/621499803884584998/1162393253446950983/FmiZhwqXkAA7DO5.jpg?ex=653bc613&is=65295113&hm=be8e275a0bb64a0078f3e0a6e578d24199feb85ce8571a75cc7a3ea7974ac844&',
  //     user: 'Markola',
  //     date: new Date(),
  //     postContent: newPostText,
  //   });
  // };

  const handleForumChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewPostText(event.target.value);
  };

  return (
    <main className="main__forum">
      <h1 className="font-title font-big forum__title">Fórum de Discussões</h1>

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

export default Forum;

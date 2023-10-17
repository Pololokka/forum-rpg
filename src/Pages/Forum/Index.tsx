import './Styles.css';
import { mockedData } from '../../Data/MockedData';

import Card from '../../Components/Card/Index';

console.log(mockedData);

const Forum = () => {
  return (
    <section>
      <h1 className="font-title font-big forum__title">Fórum de Discussões</h1>

      {mockedData[0].posts.map((element, index) => {
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
  );
};

export default Forum;

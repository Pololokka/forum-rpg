import './Styles.css';
import { mockedData } from '../../Data/MockedData';

import Card from '../../Components/Card/Index';

const Forum = () => {
  return (
    <section>
      <h1 className="font-title font-big forum__title">Fórum de Discussões</h1>

      {mockedData.map((element, index) => {
        return (
          <Card
            key={index}
            user={element.user}
            date={element.date}
            postContent={element.postContent}
          />
        );
      })}

      <Card
        user="Usuário 1"
        date="10/10/23-13:34"
        postContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec luctus justo. Maecenas ultrices aliquam ante id ultrices. Nullam sollicitudin at magna id gravida. Morbi porta at dolor non fringilla. Pellentesque sed tincidunt risus. Pellentesque luctus eget diam ut bibendum. Nunc sed luctus justo, et euismod lorem. Sed in odio."
      />

      <Card
        user="Usuário 2"
        date="10/10/23-14:05"
        postContent="
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae."
      />
    </section>
  );
};

export default Forum;

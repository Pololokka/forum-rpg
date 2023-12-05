import './Styles.css';

import { Link } from 'react-router-dom';

import { mockedData } from '../../Data/MockedData';
import { UserConsumer } from '../../Contexts/User';

const Groups = () => {
  const { userInfo }: any = UserConsumer();

  return (
    <>
      <header className="header-groups">
        <h1 className="font-title font-big">Escolha a Mesa</h1>
      </header>

      <main className="main-group__cards">
        {mockedData.map((element, index) => {
          return (
            <div key={index} className="outer-card group__card">
              <p className="font-title font-med">{element.groupName}</p>

              <Link to={`/forum/${element.id}/0`}>
                <input
                  type="submit"
                  value="Ir Para a Mesa"
                  className="font-title font-small input-button-positive"
                />
              </Link>
            </div>
          );
        })}

        <input
          type="button"
          value="teste de userInfo"
          onClick={() => console.log(userInfo)}
        />
      </main>
    </>
  );
};

export default Groups;

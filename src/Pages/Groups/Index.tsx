import './Styles.css';

import { Link } from 'react-router-dom';

import { mockedData } from '../../Data/MockedData';

const Groups = () => {
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

              <Link to={`/forum/${element.id}`}>
                <input
                  type="submit"
                  value="Ir Para a Mesa"
                  className="font-title font-small input-button-positive"
                />
              </Link>
            </div>
          );
        })}
      </main>
    </>
  );
};

export default Groups;

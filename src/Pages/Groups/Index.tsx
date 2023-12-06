import './Styles.css';

import { Link } from 'react-router-dom';

//import { mockedData } from '../../Data/MockedData';
import { UserConsumer } from '../../Contexts/User';
import { useEffect, useState } from 'react';

const Groups = () => {
  const { userInfo }: any = UserConsumer();
  const [userGroups, setUserGroups] = useState();

  const fetchGroups = async () => {
    const postData = {
      groups: userInfo.groups,
    };

    try {
      const connect = await fetch(
        'https://forum-rpg-back.onrender.com/api/group/user',
        {
          method: 'POST',
          body: JSON.stringify(postData),
          headers: { 'Content-type': 'application/json; charset=UTF-8' },
        },
      );

      if (!connect.ok) {
        throw new Error('Mesa não encontrada ou usuário sem mesa');
      }

      const convertedConnexion = await connect.json();
      setUserGroups(convertedConnexion);
      console.log(userGroups);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchGroups();
  }, []);

  return (
    <>
      <header className="header-groups">
        <h1 className="font-title font-big">Escolha a Mesa</h1>
      </header>

      <main className="main-group__cards">
        {userInfo.groups.map((element: any, index: number) => {
          return (
            <div key={index} className="outer-card group__card">
              <p className="font-title font-med">{element.groupName}</p>

              <Link to={`/forum/${element._id}/0`}>
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

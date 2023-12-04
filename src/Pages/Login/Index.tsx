import './Styles.css';

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const defaultLogin: { userName: string; password: string } = {
  userName: '',
  password: '',
};

const Login = () => {
  const [login, setLogin] = useState(defaultLogin);
  // let token;
  const navigate = useNavigate();

  const loginAcc = async (login: any, page: string) => {
    console.log(login);

    const postData = {
      email: login.userName,
      password: login.password,
    };

    const connect = await fetch(
      'https://forum-rpg-back.onrender.com/api/auth/login',
      {
        method: 'POST',
        body: JSON.stringify(postData),
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
      },
    );

    if (!connect.ok) {
      throw new Error('Opa! Não foi possível fazer o login!');
    } else {
      //navigate(page);
      const convertedConnexion = await connect.json();
      console.log(convertedConnexion);
      getUserInfo(convertedConnexion.token, convertedConnexion.userId);
      return convertedConnexion;
    }
  };

  const getUserInfo = async (token: string, id: string) => {
    console.log('entrou no getUserInfo');

    try {
      const connect = await fetch(
        `https://forum-rpg-back.onrender.com/api/user/${id}`,
        {
          method: 'GET',
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
            Authorization: `Bearer ${token}`,
          },
        },
      );

      if (!connect.ok) {
        throw new Error('deu merda aqui');
      }

      //navigate(page);
      const convertedConnexion = await connect.json();
      console.log('resposta do getUserInfo: ' + convertedConnexion);
      return convertedConnexion;
    } catch (error) {
      console.log(error);
    }

    // const connect = await fetch(
    //   `https://forum-rpg-back.onrender.com/api/user/${id}`,
    //   {
    //     method: 'GET',
    //     headers: {
    //       'Content-type': 'application/json; charset=UTF-8',
    //       Authorization: `Bearer ${token}`,
    //     },
    //   },
    // );

    // console.log('passou do connect');

    // if (!connect.ok) {
    //   console.log('Opa! Não foi possível fazer o login!');
    // } else {
    //   //navigate(page);
    //   const convertedConnexion = await connect.json();
    //   console.log('resposta do getUserInfo: ' + convertedConnexion);
    //   return convertedConnexion;
    // }
  };

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      loginAcc(login, 'groups');
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name: string = event.target.name;
    const value: string = event.target.value;

    setLogin({ ...login, [name]: value });
  };

  return (
    <>
      <header className="login__header">
        <h1 className="font-title font-big">Seja Bem Vindo!</h1>
      </header>

      <main className="login__main">
        <section>
          <form
            className="outer-card form-card"
            onSubmit={(event) => handleLogin(event)}
          >
            <label htmlFor="userName" className="font-text font-med">
              Usuário
            </label>
            <input
              type="text"
              name="userName"
              id="userName"
              className="font-text font-med input-field"
              value={login.userName || ''}
              onChange={(event) => handleChangeInput(event)}
            />

            <label htmlFor="password" className="font-text font-med">
              Senha
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="font-text font-med input-field"
              value={login.password || ''}
              onChange={(event) => handleChangeInput(event)}
            />

            <input
              type="submit"
              value="Entrar!"
              className="font-title font-small input-button-positive"
            />
          </form>
        </section>
      </main>
    </>
  );
};

export default Login;

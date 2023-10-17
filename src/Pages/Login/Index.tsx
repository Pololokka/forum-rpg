import './Styles.css';

import { useState } from 'react';
import { Link } from 'react-router-dom';

const defaultLogin: { userName: string; password: string } = {
  userName: '',
  password: '',
};

const Login = () => {
  const [login, setLogin] = useState(defaultLogin);

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(login);
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

            <Link to="/groups">
              <input
                type="submit"
                value="Entrar!"
                className="font-title font-small input-button-positive"
              />
            </Link>
          </form>
        </section>
      </main>
    </>
  );
};

export default Login;

import React from 'react';
import { Redirect } from 'react-router-dom';
import { createUser } from '../services/userAPI';
import Loading from '../components/Loading';
/* import Search from '/Search' */

export default class Login extends React.Component {
  state = {
    name: '',
    isLoading: false,
    isLoggedOn: false,
  }

  /*   utilizar SEMPRE forma abaixo para alterar estado! pega o estado antigo e só modifica o que eu quero (que é a coisa nova) */
  handleChange = (event) => {
    /*       console.log(event.target.value); */
    this.setState((prevState) => ({ ...prevState, name: event.target.value }));
  }

  handleSubmit = async () => {
    const { name } = this.state;
    this.setState((prevState) => ({ ...prevState, isLoading: true }));
    await createUser({ name });
    this.setState((prevState) => ({ ...prevState, isLoggedOn: true }));
  }

  render() {
    const { name, isLoading, isLoggedOn } = this.state;
    const minNumber = 3;
    if (isLoggedOn) return <Redirect to="/search" />;
    if (isLoading) return <Loading />;
    return (
    /*       <div>
        { isLoggedOn && <Redirect to="/search" />}
        { isLoading ? (
          <Loading />
        ) : ( */
      <div data-testid="page-login">
        <h1>Login</h1>
        <form
          onSubmit={ this.handleSubmit }
        >
          <input
            data-testid="login-name-input"
            value={ name }
            onChange={ this.handleChange }
          />
          <button
            data-testid="login-submit-button"
            type="submit"
            disabled={ name.length < minNumber }
          >
            Entrar
          </button>
        </form>
        {/*           </div>
        )} */}

      </div>
    );
  }
}

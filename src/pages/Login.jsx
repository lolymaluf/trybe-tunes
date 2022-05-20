import React from 'react';
import PropTypes from 'prop-types';
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
  /*   this.state.name = inputName; */
  /* utilizar sempre forma abaixo para alterar estado!
    handleChange = (event) => {
    console.log(event.target.value);
    this.setState((prevState) => ({ ...prevState, name: event.target.value })); */

  handleChange = ({ target }) => {
  /*     console.log(event.target.value); */
    const { name, value } = target;
    this.setState(() => ({ [name]: value }));
  }

  /*   handleSubmit = (event) => {
    const { name } = this.state;
    const { navigateSearch } = this.props.navigate;
    console.log(`Um nome foi enviado:${name}`);
    event.preventDefault();
    navigateSearch('search');
  } */

  handleClick = async () => {
    this.setState({
      isLoading: true,
    });
    const { userName } = this.state;
    await createUser({ name: userName });
    const { history } = this.props;
    history.push('/search');
  };

  OnClickButton = async () => {
    const { name } = this.state;
    this.setState({
      isLoading: true,
    });
    await createUser({ name });
    this.setState({
      isLoggedOn: true,
    });
  }

  render() {
    const { name, isLoading, isLoggedOn } = this.state;
    const minNumber = 3;
    return (
      <div>
        { isLoggedOn && <Redirect to="/search" />}
        { isLoading ? (
          <Loading />
        ) : (
          <div data-testid="page-login">
            <h1>Login</h1>
            <form
              onSubmit={ this.handleSubmit }
            >
              <input
                name="name"
                data-testid="login-name-input"
                value={ name }
                onChange={ this.handleChange }
              />
              <button
                name="submitButton"
                data-testid="login-submit-button"
                type="submit"
                disabled={ name.length < minNumber }
                onClick={ this.OnClickButton }
              >
                Entrar
              </button>
            </form>
          </div>
        )}

      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.func.isRequired,
};

/*     const { id } = this.props.match.params;
    const number = 3;
    if (+id > number) { return (<Redirect to="/search" />); } */

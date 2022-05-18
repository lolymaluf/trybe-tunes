import React from 'react';

export default class Login extends React.Component {
  render() {
    return (
      <div data-testid="page-login">
        <form data-testid="login-name-input">
          <button data-testid="login-submit-button" type="submit">Entrar</button>
        </form>
      </div>
    );
  }
}

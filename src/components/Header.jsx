import React from 'react';
import Loading from './Loading';
import { getUser } from '../services/userAPI';

export default class Header extends React.Component {
  /* para antes de renderizar, montar o componente */
  constructor() {
    super();
    this.state = { userName: {}, isLoading: false };
  }

  async componentDidMount() {
    this.setState({ isLoading: true });
    const recebeUsuario = await getUser();
    this.setState({ isLoading: false, userName: recebeUsuario });
  }

  render() {
    const { isLoading, userName } = this.state;
    return (
      <header data-testid="header-component">
        { isLoading
          ? (<Loading />)
          : (
            <span data-testid="header-user-name">
              { userName.name }
            </span>)}
      </header>
    );
  }
}

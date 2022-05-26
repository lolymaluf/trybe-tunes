import React from 'react';
import { Link } from 'react-router-dom';
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
            <h1 data-testid="header-user-name" className="user-header">
              { userName.name }
            </h1>)}
        <nav className="nav-header">
          <Link data-testid="link-to-search" to="/search">SEARCH</Link>
          <Link data-testid="link-to-favorites" to="/favorites">FAVORITES</Link>
          <Link data-testid="link-to-profile" to="/profile">PROFILE</Link>
        </nav>
      </header>
    );
  }
}

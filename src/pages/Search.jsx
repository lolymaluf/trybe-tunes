import React from 'react';
import Header from '../components/Header';

export default class Search extends React.Component {
  state = {
    artistName: '',
  }

  handleChange = (event) => {
    /*       console.log(event.target.value); */
    this.setState((prevState) => ({ ...prevState, artistName: event.target.value }));
  }

  render() {
    const { artistName } = this.state;
    const minCharacter = 2;
    return (
      <div data-testid="page-search">
        <Header />
        <h1>Search</h1>
        <form>
          <input
            data-testid="search-artist-input"
            value={ artistName }
            onChange={ this.handleChange }
          />
          <button
            data-testid="search-artist-button"
            type="submit"
            disabled={ artistName.length < minCharacter }
          >
            Pesquisar

          </button>
        </form>
      </div>
    );
  }
}

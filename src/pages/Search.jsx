import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Loading from '../components/Loading';

export default class Search extends React.Component {
  state = {
    artistName: '',
    searchValue: '',
    isLoading: false,
    albums: [],
  }

  handleChange = (event) => {
    this.setState((prevState) => ({ ...prevState, artistName: event.target.value }));
  }

  handleSearch = async (e) => {
    e.preventDefault();
    const { artistName } = this.state;
    this.setState((prevState) => ({ ...prevState,
      isLoading: true,
      searchValue: artistName,
    /*   artistName: '', */
    }));
    const esperaAlbum = await searchAlbumsAPI(artistName);
    console.log(esperaAlbum);
    this.setState((prevState) => ({ ...prevState,
      isLoading: false,
      albums: esperaAlbum,
      artistName: '',
    }));
  }

  render() {
    const { artistName, isLoading, albums, searchValue } = this.state;
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
            onClick={ this.handleSearch }
          >
            Pesquisar

          </button>
        </form>
        {isLoading ? (
          <Loading />
        ) : (
          <h1>
            Resultado de álbuns de:
            {` ${searchValue}`}
          </h1>
        )}
        {albums.length === 0 ? (
          <h2>Nenhum álbum foi encontrado</h2>
        ) : (
          albums.map((album, index) => (
            <div key={ index }>
              <h2>{album.collectionName}</h2>
              <h2>{album.artistName}</h2>
              <Link
                key={ album.collectionId }
                data-testid={ `link-to-album-${album.collectionId}` }
                to={ `/album/${album.collectionId}` }
              />
              <img src={ album.artworkUrl100 } alt="Álbum" />
            </div>
          )))}
      </div>

    );
  }
}

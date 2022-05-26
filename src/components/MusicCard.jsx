import React from 'react';
import PropTypes from 'prop-types';
import { addSong, getFavoriteSongs } from '../services/favoriteSongsAPI';
import Loading from './Loading';

export default class MusicCard extends React.Component {
  state = {
    favorites: [],
    loading: false,
  }

  componentDidMount() {
    this.favorite();
  }

  favorite = () => {
    this.setState(() => ({
      loading: true,
    }));
    getFavoriteSongs().then((favoriteList) => {
      this.setState(() => ({
        favorites: favoriteList,
        loading: false,
      }));
    });
  }

  addFavoriteTrack = async () => {
    const { som } = this.props;
    this.setState((fav) => ({ loading: true, favorite: !fav.favorite }));
    await addSong(som);
    this.setState({ loading: false });
  }

  render() {
    const { loading, favorites } = this.state;
    console.log(favorites);
    const { som: { trackName, previewUrl, trackId } } = this.props;
    return (
      <div>
        {loading && <Loading />}

        <div>

          <p>{trackName}</p>
          <audio data-testid="audio-component" src={ previewUrl } controls>
            <track kind="captions" />
            O seu navegador não suporta o elemento
            <code>audio</code>
          </audio>
          .
        </div>
        <label htmlFor="favorites">
          Favoritar
          <input
            id="favorites"
            type="checkbox"
            data-testid={ `checkbox-music-${trackId}` }
            onClick={ this.addFavoriteTrack }
            checked={ favorites.find((param) => param.trackId === trackId) }
          />
        </label>

      </div>
    );
  }
}

MusicCard.propTypes = {
  som: PropTypes.objectOf().isRequired,
};

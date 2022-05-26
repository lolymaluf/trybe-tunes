import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import MusicCard from '../components/MusicCard';

export default class Album extends React.Component {
  state = {
    music: [],
    artist: '',
    album: '',
  }

  componentDidMount() {
    this.getAlbumMusics();
  }

    getAlbumMusics = async () => {
      const { match: { params } } = this.props;
      const response = await getMusics(params.id);
      this.setState({
        music: response.filter((music) => music.trackId),
        artist: response[0].artistName,
        album: response[0].collectionName,
      });
    };

    render() {
      const { music, artist, album } = this.state;
      console.log('musica: ', music);
      console.log('artist: ', artist);
      console.log('album: ', album);
      return (
        <div data-testid="page-album">
          <Header />
          <p data-testid="artist-name">{artist}</p>
          <p data-testid="album-name">{album}</p>
          {music.map((som, index) => (
            <MusicCard key={ index } som={ som } />
          ))}
        </div>
      );
    }
}

Album.propTypes = {
  match: PropTypes.objectOf().isRequired,
};

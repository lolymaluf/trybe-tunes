import React from 'react';
import Header from '../components/Header';

export default class Album extends React.Component {
  render() {
    return (
      <div data-testid="page-album">
        <Header />
        <h1>Albums</h1>
      </div>
    );
  }
}

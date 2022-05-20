import React from 'react';
import Header from '../components/Header';

export default class ProfileEdit extends React.Component {
  render() {
    return (
      <div data-testid="page-profile-edit">
        <Header />
        <h1>Edit Profile</h1>
      </div>
    );
  }
}

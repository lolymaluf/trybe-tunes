import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import Search from './pages/Search';
import NotFound from './pages/NotFound';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/"><Login /></Route>
        <Route path="/album:id"><Album /></Route>
        <Route path="/favorites"><Favorites /></Route>
        <Route exact path="/profile"><Profile /></Route>
        <Route path="/profile/edit"><ProfileEdit /></Route>
        <Route path="/search"><Search /></Route>
        <Route path="*"><NotFound /></Route>
      </Switch>
    );
  }
}

export default App;

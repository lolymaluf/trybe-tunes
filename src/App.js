import React from 'react';
import { Route, Switch } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path ="/"></Route>
        <Route path ="/album"></Route>
        <Route path ="/favorites"></Route>
        <Route path ="/profile"></Route>
        <Route path = "/profile/edit"></Route>
        <Route path = "/search"></Route>
      </Switch>
    );
  }
}

export default App;

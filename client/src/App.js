import React  from 'react';
import { Route, Switch } from 'react-router-dom';
import UserProfile from './UserProfile';
import Search from './Search';
import Register from './Register';
import Login from './Login';
import Museums from './Museums';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      museumAll: [],
      faves: []
    };
  }

  render() {
    return (
      <div>
        <main>
          <Switch>
            <Route
              path="/museum/:museumid"
              render={() => (<Museums props={this.state.museum} />)} />
            <Route path="/:userid/faves" component={UserProfile}/>
            <Route path="/search" component={Search} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/" />
          </Switch>
        </main>
        <h1>Hello Good Sir!</h1>
      </div>
    );
  }
}

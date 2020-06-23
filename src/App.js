import React from 'react';
import Login from './components/Login';
import NavBar from './components/NavBar';
import { Switch, Route, useHistory, Redirect } from 'react-router-dom';
import Offers from './components/Offers';
import Booking from './components/Booking';
import Home from './components/Home';
import getAccessToken from './helper/getAccessToken';

const App = props => {
  const history = useHistory();

  // Redirect to /login
  if (getAccessToken() === false) history.push('/login');

  return (
    <div className="App">
      <Switch>
        <Route path="/offers" component={Offers} />
        <Route path="/booking" component={Booking} />
        <Route path="/login" component={Login} />
        <Route path="/" exact component={Home} />
        <Redirect to="/" />
      </Switch>
      <NavBar />
    </div>
  );
};

export default App;

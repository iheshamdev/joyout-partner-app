import React from 'react';
import Login from './components/Login';
import NavBar from './components/NavBar';
import { Switch, Route } from 'react-router';
import Offers from './components/Offers';
import Booking from './components/Booking';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <NavBar />

      <Switch>
        <Route path="/offers" component={Offers} />
        <Route path="/booking" component={Booking} />
        <Route path="/" component={Home} />
      </Switch>
      {/* <Login /> */}
    </div>
  );
}

export default App;

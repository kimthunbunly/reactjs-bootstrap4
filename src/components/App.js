import React, { Component } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Login from './Loginform';


class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Home/>
        <Login/>
      </div>
    );
  }
}

export default App;

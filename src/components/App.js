import React  from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Login from './Loginform';
import NewCard from './NewCard';
import GCard from './G-Card';
import Signin from './Signinform';
import Contact from './Contact';
import Footer from './Footer';
import Slider from './Slider';


export default class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Home/>
        <Slider/>
        <br/>
        <Login/>
        <br/>
        <NewCard/>
        <br/>
        <GCard/>
        <br/>
        <Signin/>
        <br/>
        <Contact/>
        <Footer/>
      </div>
    );
  }
}

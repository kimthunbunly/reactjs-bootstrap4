import React  from 'react';
import Navbar from './Navbar';
import Home from './Home';
import GCard from './G-Card';
import Contact from './Contact';
import Footer from './Footer';
import Banner from './Banner';


export default class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Home/>
        <br/>
        <Banner/>
        <br/>
        <GCard/>
        <br/>
        <Contact/>
        <Footer/>
      </div>
    );
  }
}

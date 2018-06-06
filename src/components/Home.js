import React from 'react';
import '../assets/index.css';
import Login from './Loginform';
import Signin from './Signinform';

export default class Home extends React.Component {
  render() {
    return (
      <div>
    <div className="home">
      <div className="container">
          <div className="wel">
            <h1>WELCOME OT MY WEBSITE TEMPLATE</h1>
            <p>The Ultimate Returns Experience For Both Retailer And  Customer </p>
          </div>
          <div className="row justify-content-md-center">
            <div className="col col-lg-6">
              <img className="i-mac" src="./src/assets/image/i-mac.png" alt="imac"/>
            </div>
          </div>
          <div className="row justify-content-md-center">
            <div className="col col-lg-6">
              <button type="button" className="btn btn-outline-success"data-toggle="collapse" data-target="#login" aria-expanded="false" aria-controls="login">Login</button>
              <a data-toggle="collapse" data-target="#signin" aria-expanded="false" aria-controls="collapseExample"><p>Create New Account Click Here Signup!</p></a>
            </div>
          </div>
          <div className="collapse" id="login">
          <div className="card card-body">
              <Login/>
          </div>
          </div>
          <div className="collapse" id="signin">
          <div className="card card-body">
              <Signin/>
          </div>
          </div>
      </div>
    </div>
    </div>
    );
  }
}

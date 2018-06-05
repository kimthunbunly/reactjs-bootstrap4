import React from 'react';
import '../assets/index.css';

export default class Home extends React.Component {
  render() {
    return (
    <div className="container">
            <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item"><a href="#">Login</a></li>
            <li className="breadcrumb-item active" aria-current="page">Signin</li>
          </ol>
        </nav>
        <div className="create-text-h1">
          <h1>Welcome to my react js homepage</h1>
        </div>
    </div>
    );
  }
}

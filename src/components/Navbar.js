import React from 'react';

export default class Navbar extends React.Component {
  render() {
    return (
            <nav className="navbar navbar-expand-lg">
                <img className="logo-header" src="./src/assets/image/logo.png" alt="logo-shoprunback" />
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <a href="" className="fa fa-user-circle-o" aria-hidden="true"></a>
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>

); } }

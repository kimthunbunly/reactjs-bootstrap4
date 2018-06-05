import React  from 'react';
import '../assets/index.css';

export default class Home extends React.Component {
  render() {
   return (
     <div className="container">
        <div className="row">
          <div className="col-6">
            <h1>The Company Name Here</h1>
            <h2>THE SUN COMPANY</h2>
          </div>
          <div className="col-6">
            <form>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required autoFocus/>
                    <small id="emailHelp" className="form-text text-muted">Well never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" htmlFor="exampleCheck1">accept at policy</label>
                </div>
                <button type="submit" className="btn btn-primary">Log In</button>
            </form>
          </div>
        </div>
      </div>
    ); } }

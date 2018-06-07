import React from 'react';

export default class Signin extends React.Component{
  render(){
    return(
            <form className="form-horizontal form-center">
                <div className="row">
                    <div className="col-md-12">
                        <h2>Register New User</h2>
                        <hr/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 field-label-responsive">
                        <label htmlFor="name">Name</label>
                    </div>
                    <div className="col-md-8">
                        <div className="form-group">
                            <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                                <div className="input-group-addon" style={{width: "2.6rem"}}><i className="fa fa-user"></i></div>
                                <input type="text" name="name" className="form-control" id="name" placeholder="John Doe" required autoFocus />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 field-label-responsive">
                        <label htmlFor="email">E-Mail Address</label>
                    </div>
                    <div className="col-md-8">
                        <div className="form-group">
                            <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                                <div className="input-group-addon" style={{width: "2.6rem"}}><i className="fa fa-at"></i></div>
                                <input type="text" name="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="you@example.com" required autoFocus />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 field-label-responsive">
                        <label htmlFor="password">Password</label>
                    </div>
                    <div className="col-md-8">
                        <div className="form-group has-danger">
                            <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                                <div className="input-group-addon" style={{width: "2.6rem"}}><i className="fa fa-key"></i></div>
                                <input type="password" name="password" className="form-control" id="password" placeholder="Password" required />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 field-label-responsive">
                        <label htmlFor="password">Confirm Password</label>
                    </div>
                    <div className="col-md-8">
                        <div className="form-group">
                            <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                                <div className="input-group-addon" style={{width: "2.6rem"}}>
                                    <i className="fa fa-repeat"></i>
                                </div>
                                <input type="password" name="password-confirmation" className="form-control" id="password-confirm" placeholder="Password" required />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <button type="submit" className="btn btn-success"><i className="fa fa-user-plus"></i> Register</button>
                    </div>
                </div>
            </form>

); } }

import React from 'react';
import '../assets/index.css';

export default class Contact extends React.Component{
  render(){
    return(
                      <div className="contact">
                          <div className="container">

                              <div className="row">

                                  <div className="col-lg-8 col-lg-offset-2">

                                      <h1>Contact from </h1>

                                      <form id="contact-form" method="post" action="contact.php" role="form" noValidate="true">

                                          <div className="messages"></div>

                                          <div className="controls">

                                              <div className="row">
                                                  <div className="col-md-6">
                                                      <div className="form-group has-error has-danger">
                                                          <label htmlFor="form_name">Firstname *</label>
                                                          <input id="form_name" type="text" name="name" className="form-control" placeholder="Please enter your firstname *" required="required" data-error="Firstname is required." />
                                                          <div className="help-block with-errors">
                                                              <ul className="list-unstyled">
                                                                  <li>Firstname is required.</li>
                                                              </ul>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div className="col-md-6">
                                                      <div className="form-group has-error has-danger">
                                                          <label htmlFor="form_lastname">Lastname *</label>
                                                          <input id="form_lastname" type="text" name="surname" className="form-control" placeholder="Please enter your lastname *" required="required" data-error="Lastname is required." />
                                                          <div className="help-block with-errors">
                                                              <ul className="list-unstyled">
                                                                  <li>Lastname is required.</li>
                                                              </ul>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div className="row">
                                                  <div className="col-md-6">
                                                      <div className="form-group has-error has-danger">
                                                          <label htmlFor="form_email">Email *</label>
                                                          <input id="form_email" type="email" name="email" className="form-control" placeholder="Please enter your email *" required="required" data-error="Valid email is required." />
                                                          <div className="help-block with-errors">
                                                              <ul className="list-unstyled">
                                                                  <li>Valid email is required.</li>
                                                              </ul>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div className="col-md-6">
                                                      <div className="form-group">
                                                          <label htmlFor="form_phone">Phone</label>
                                                          <input id="form_phone" type="tel" name="phone" className="form-control" placeholder="Please enter your phone" />
                                                          <div className="help-block with-errors"></div>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div className="row">
                                                  <div className="col-md-12">
                                                      <div className="form-group has-error has-danger">
                                                          <label htmlFor="form_message">Message *</label>
                                                          <textarea id="form_message" name="message" className="form-control" placeholder="Message for me *" rows="4" required="required" data-error="Please,leave us a message."></textarea>
                                                          <div className="help-block with-errors">
                                                              <ul className="list-unstyled">
                                                                  <li>Please,leave us a message.</li>
                                                              </ul>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div className="col-md-12">
                                                      <input type="button" className="btn btn-success btn-send" value="Send message" />
                                                  </div>
                                              </div>

                                          </div>

                                      </form>

                                  </div>

                              </div>

                          </div>
                      </div>
); } }

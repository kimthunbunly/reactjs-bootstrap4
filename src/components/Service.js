import React from 'react';
import '../assets/index.css';

export default class Service extends React.Component{
  render(){
    return(
              <div className="service">
                <div className="container">
                <br/>
                    <h1>SERVICS</h1>
                    <p>Lorem ipsum dolo sit anet consectur.</p>
                    <div className="row justify-content-md-center">
                        <div className="col-md-4">
                            <span className="fa-stack fa-4x">
                                  <i className="fa fa-circle fa-stack-2x text-primary"></i>
                                  <i className="fa fa-shopping-cart fa-stack-1x fa-inverse"></i>
                                </span>
                            <h4 className="service-heading">E-Commerce</h4>
                            <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                        </div>
                        <div className="col-md-4">
                            <span className="fa-stack fa-4x">
                                <i className="fa fa-circle fa-stack-2x text-primary"></i>
                                <i className="fa fa-laptop fa-stack-1x fa-inverse"></i>
                              </span>
                            <h4 className="service-heading">Responsive Design</h4>
                            <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                            <br/>
                        </div>
                        <div className="col-md-4">
                            <span className="fa-stack fa-4x">
                              <i className="fa fa-circle fa-stack-2x text-primary"></i>
                              <i className="fa fa-lock fa-stack-1x fa-inverse"></i>
                            </span>
                            <h4 className="service-heading">Web Security</h4>
                            <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                        </div>
                    </div>
                  </div>
                </div>

); } }

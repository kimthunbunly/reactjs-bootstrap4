import React from 'react';

export default class GroupCard extends React.Component{
  render(){
    return(
      <div className="container">
        <div className="card-group">
            <div className="card">
              <img className="card-img-top" src="./src/assets/image/image3.jpg" alt="Card image cap"/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
            <div className="card">
              <img className="card-img-top" src="./src/assets/image/image3.jpg" alt="Card image cap"/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
            <div className="card">
              <img className="card-img-top" src="./src/assets/image/image3.jpg" alt="Card image cap"/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
            </div>
            </div>

    );
  }
}

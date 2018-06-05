import React from 'react';



export default class NewCard extends React.Component{
  render(){
    return(
        <div className="container">
          <div className="row">
          <div className="col-3">
          <div className="card" style={{width:"18em"}}>
            <img className="card-img-top" src="./src/assets/image/image1.jpg" alt="Card image cap"/>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Cras justo odio</li>
              <li className="list-group-item">Dapibus ac facilisis in</li>
              <li className="list-group-item">Vestibulum at eros</li>
            </ul>
            <div className="card-body">
              <a href="#" className="card-link">Card link</a>
              <a href="#" className="card-link">Another link</a>
            </div>
            </div>
          </div>
          <div className="col-3">
          <div className="card" style={{width:"18em"}}>
            <img className="card-img-top" src="./src/assets/image/image2.jpg" alt="Card image cap"/>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Cras justo odio</li>
              <li className="list-group-item">Dapibus ac facilisis in</li>
              <li className="list-group-item">Vestibulum at eros</li>
            </ul>
            <div className="card-body">
              <a href="#" className="card-link">Card link</a>
              <a href="#" className="card-link">Another link</a>
            </div>
            </div>
          </div>
          <div className="col-3">
          <div className="card" style={{width:"18em"}}>
            <img className="card-img-top" src="./src/assets/image/image3.jpg" alt="Card image cap"/>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Cras justo odio</li>
              <li className="list-group-item">Dapibus ac facilisis in</li>
              <li className="list-group-item">Vestibulum at eros</li>
            </ul>
            <div className="card-body">
              <a href="#" className="card-link">Card link</a>
              <a href="#" className="card-link">Another link</a>
            </div>
            </div>
          </div>
          </div>
        </div>
    );
  }
}

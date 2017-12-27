import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';


export default class NotFound extends React.Component {

  render() {
    return (
      <div className="notFound">
        <div className="text">
          <div className="container">
            <h1>404</h1>
            <h2>We can't find the page you're looking for.</h2>
            <RaisedButton
              className="btn"
              label="uclapi.com"
              labelColor={"#ffffff"}
              backgroundColor="#454545"
              href={"https://uclapi.com"}/>
          </div>
        </div>
      </div>
    )
  }

}

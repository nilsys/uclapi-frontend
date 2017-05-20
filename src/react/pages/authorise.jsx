import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from '../components/navbar.jsx';
import AppPermissions from '../components/appPermissions.jsx';

class AuthoriseApp extends React.Component {
  constructor (props) {
    super(props);
    this.state = {data: window.initialData};
  }
  render () {
    return <div>
      <div className="layout">
        <Navbar/>
        <div className="content pure-g">
          <div className="pure-u-md-1-4"></div>
          <div className="pure-u-1 pure-u-md-1-2 card">
            <h2>An application would like to connect to your UCL Account</h2>
            <AppPermissions
              app_name={this.state.data.app_name}
              creator={this.state.data.creator}
              private_roombookings={this.state.data.scope.private_roombookings}
              private_timetable={this.state.data.scope.private_timetable}
              private_uclu={this.state.data.scope.private_uclu}
              />
            <hr/>
            <h3>Would you like to allow {this.state.data.app_name} access to the data shown above?</h3>
            <hr/>
            <em>
              Apps you connect to UCL via the API (<a href="https://uclapi.com/">uclapi.com</a>) cannot access any data that is not shown above. Your personal details such as your home address, date of birth, UCL password and phone number are kept private and cannot be accessed even with these permissions. If you have any further questions please do not hesitate to contact us by email: <a href="mailto:isd.apiteam@ucl.ac.uk">isd.apiteam@ucl.ac.uk</a>.
            </em> 
          </div>
          </div>
        <div className="pure-u-md-1-4"></div>
      </div>
    </div>;
  }
}

ReactDOM.render(
  <AuthoriseApp />,
  document.querySelector('.app')
);

import React from 'react';

import AppBar from 'material-ui/AppBar';
import { getStyles } from 'material-ui/AppBar/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import ActionMenu from 'material-ui/svg-icons/navigation/menu';

import apiLogo from './../../images/simpleAPILogoWhite.svg';


export default class Navbar extends React.Component {

  constructor(props) {
    super(props);
    let loggedIn = false;

    if (window.initialData.logged_in === "True") {
      loggedIn = true;
    }

    this.state = {
      open: false,
      loggedIn: loggedIn
    };
  }

  handleToggle = () => {
    this.setState({
      open: !this.state.open
    });
  }

  resize = () => {
    this.forceUpdate()
  }

  componentDidMount() {
    window.addEventListener('resize', this.resize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize)
  }

  static get contextTypes() {
    return { muiTheme: React.PropTypes.object.isRequired };
  }

  render() {
    const Logo = (<img src={apiLogo} />)

    const styles = getStyles(this.props, this.context);

    let rightButtons = (
      <div>
        <a href={"/"}>
          <FlatButton label="Home" className="active" style={styles.flatButton} />
        </a>
        <a href={"/docs/"}>
          <FlatButton label="Documentation" style={styles.flatButton} />
        </a>
        <a href={"/dashboard/"}>
          <RaisedButton label="Login" style={styles.raisedButton} />
        </a>
      </div>
    )

    if (this.state.loggedIn) {
      rightButtons = (
        <div>
          <a href={"/"}>
            <FlatButton label="Home" className="active" style={styles.flatButton} />
          </a>
          <a href={"/docs/"}>
            <FlatButton label="Documentation" style={styles.flatButton} />
          </a>
          <a href={"/dashboard/"}>
            <FlatButton label="Dashboard" style={styles.flatButton} />
          </a>
        </div>
      )
    }

    if (window.innerWidth < 700) {
      rightButtons = (
        <div>
          <IconButton>
            <ActionMenu style={styles.iconButton} onClick={this.handleToggle} />
          </IconButton>
          <Drawer open={this.state.open} openSecondary={true} docked={false}>
            <a href={"/"}>
              <MenuItem onClick={this.handleToggle}>Home</MenuItem>
            </a>
            <a href={"/docs/"}>
              <MenuItem onClick={this.handleToggle}>Documentation</MenuItem>
            </a>
            <a href={"/dashboard/"}>
              <MenuItem onClick={this.handleToggle}>Login</MenuItem>
            </a>
          </Drawer>
        </div>
      )

      if (this.state.loggedIn) {
        rightButtons = (
          <div>
            <IconButton>
              <ActionMenu style={styles.iconButton} onClick={this.handleToggle} />
            </IconButton>
            <Drawer open={this.state.open} openSecondary docked={false}>
              <a href={"/"}>
                <MenuItem onClick={this.handleToggle}>Home</MenuItem>
              </a>
              <a href={"/docs/"}>
                <MenuItem onClick={this.handleToggle}>Documentation</MenuItem>
              </a>
              <a href={"/dashboard/"}>
                <MenuItem onClick={this.handleToggle}>Dashboard</MenuItem>
              </a>
            </Drawer>
          </div>
        )
      }
    }

    return (<AppBar className="navbar" title="UCL API" iconElementLeft={Logo} iconElementRight={rightButtons} />);
  }

}

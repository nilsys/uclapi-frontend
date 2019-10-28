import React from 'react';

import balloons from 'Images/home-page/balloons.jpg';
import logo from 'Images/home-page/logo.svg';

// Common Components
import { Row, Column, TextView, ButtonView, CardView, ImageView, Demo, NavBar } from 'Layout/Items.jsx';

export default class Footer extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    var iconsize = "100px";
    var logosize = "150px";
    
    return (
      <Row color={"secondary"} height={"fit-content"} >
          <Column width="1-2" horizontalAlignment="center">
              <TextView text={"UCL API"} heading={1} align={"center"}/>

              <TextView text={"github "} heading={5} align={"center"} style={ {"display" : "inline-block"} } link={"https://github.com/uclapi/uclapi"}/>
              <TextView text={`-`} heading={5} align={"center"} style={ {"display" : "inline-block"} } />
              <TextView text={" twitter"} heading={5} align={"center"} style={ {"display" : "inline-block"} } link={"https://twitter.com/uclapi?lang=en"}/>
              <TextView text={`-`} heading={5} align={"center"} style={ {"display" : "inline-block"} }/>
              <TextView text={" facebook"} heading={5} align={"center"} style={ {"display" : "inline-block"} } link={"https://www.facebook.com/uclapi/"}/>

              <ImageView src={logo} width={iconsize} height={iconsize} description={"ucl api logo"} isCentered={true} />
          </Column>
      </Row>
    );
  }

}
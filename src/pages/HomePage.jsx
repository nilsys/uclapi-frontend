// Standard React imports
// Styles
import 'Styles/common/uclapi.scss'
// Legacy
import 'Styles/navbar.scss'

// External dependencies
import Collapse, { Panel } from 'rc-collapse'
import React from 'react'
import ReactDOM from 'react-dom'

import docs from 'Images/home-page/docs.svg'
// Images
import heart from 'Images/home-page/heart.svg'
import market from 'Images/home-page/market.svg'
import star from 'Images/home-page/star.svg'
import { endpoints, FAQ } from 'Layout/data/homepage_constants.jsx'
// Components
import { ButtonView, CardView, Column, Demo, Footer, ImageView, NavBar, Row, TextView } from 'Layout/Items.jsx'

const questionandanswer = (question, answer) => (
  <Collapse>
    <Panel header={question} showArrow>
      <TextView text={answer} heading={`p`} />
    </Panel>
  </Collapse>
)

class HomePage extends React.Component {

  constructor(props) {
    super(props)

    let loggedIn = false
    if (window.initialData.logged_in === `True`) { loggedIn = true }

    this.state = {
      articles: window.initialData.medium_articles,
      host: window.location.hostname,
      loggedIn: loggedIn,
    }
  }

  render() {
    const iconsize = `150px`

    let startLabel = `START BUILDING`

    if (this.state.loggedIn) {
      startLabel = `DASHBOARD`
    }

    return (
      <>

        <NavBar isScroll={false} />

        {this.state.host == `staging.ninja` && (
          <Row isPadded color="warning-red">
            <Column width="9-10" horizontalAlignment={`center`} >
              <TextView align={`center`} text={`Warning! This is our bleeding-edge staging environment, and therefore performance, accuracy and reliability of the API cannot be guaranteed. For our stable, supported API please go to:`} heading={1} />
              <TextView align={`center`} text={`uclapi.com`} heading={2} link={`https://uclapi.com`} />
            </Column>
          </Row>
        )}

        <Row height="600px" color="splash-parallax">
          <Column width="2-3" horizontalAlignment="center" verticalAlignment="center">
            <TextView text={`UCL API`} heading={1} align={`center`} />
            <TextView text={`UCL API is a student-built platform for student developers to improve the student experience of everyone at UCL.`} heading={2} align={`center`} />
            <ButtonView inline text={startLabel} link={`/dashboard`} />
            <ButtonView inline text={`DOCS`} link={`/docs`} buttonType={`alternate`} />
          </Column>
        </Row>

        <Row color="secondary">
          <Column width="2-3" horizontalAlignment="center" maxWidth="1000px" minWidth="300px">
            <TextView text={`Our Goals`} heading={1} align={`center`} />

            <CardView width="1-3" minWidth="280px" style="no-bg">
              <TextView text={`Make Simple Interfaces`} heading={2} align={`center`} />
              <TextView text={`The endpoints are streamlined to enable any developer to easily pick up and use the api. We hope that developers of all ability
                            find our endpoints and website easy to navigate. We do not want to overcomplicate the process of developing
                            awesome apps, we want to be the easiest part of your development process!`} align={`justify`} heading={5}
              />
              <ImageView src={star} width={iconsize} height={iconsize} description={`an icon of a love heart`} isCentered />
            </CardView>
            <CardView width="1-3" minWidth="280px" style="no-bg">
              <TextView text={`Put Documentation First`} heading={2} align={`center`} />
              <TextView text={`As developers we feel the pain of bad documentation: this is why we are driven by good documentation. We want you 
                             to spend less time worrying about how to use our api and more time thinking about how to revolutionise the student experience. 
                             With good documentation we allow you to focus on building helpful applications.`} align={`justify`} heading={5}
              />
              <ImageView src={docs} width={iconsize} height={iconsize} description={`an icon of a clipboard`} isCentered />
            </CardView>
            <CardView width="1-3" minWidth="280px" style="no-bg">
              <TextView text={`Enable Developers`} heading={2} align={`center`} />
              <TextView text={`We want the api to be so comprehensive that any idea, no matter how big, can be created in order to improve students lives. We are always
                             open to suggestions for new endpoints and functionality so we can enable a greater range of applications to be developed. We
                             cannot wait to see what you will develop!`} align={`justify`} heading={5}
              />
              <ImageView src={heart} width={iconsize} height={iconsize} description={`an icon of a star`} isCentered />
            </CardView>
          </Column>
        </Row>

        <Row color="splash-parallax">
          <Column width="2-3" horizontalAlignment="center" maxWidth="1000px" minWidth="300px">
            <TextView text={`Get Started using our APIs`} heading={1} align={`center`} />

            {endpoints.map(x => (
              <CardView width={`1-2`} minWidth={`280px`} link={x.link} key={x.link}>
                <Row height="100px" padding="20px 0">
                  <Column width="2-3" horizontalAlignment="center" verticalAlignment="center">
                    <TextView text={x.name} heading={2} align={`center`} />
                    <TextView text={x.description} heading={5} align={`center`} noMargin />
                  </Column>
                </Row>
              </CardView>))}
          </Column>
        </Row>

        <Demo />

        <Row isPadded color="splash-parallax">
          <Column width="9-10" horizontalAlignment="center">
            <TextView text={`Check out our blog`} heading={1} align={`center`} />
            {this.state.articles.map(x => (
              <CardView width="1-3" minWidth="200px" style="default" link={x.url} key={x.link}>
                <Column width="1-1">
                  <Row height="200px" src={x.image_url}>
                    <Column width="2-3" horizontalAlignment="center" verticalAlignment="center">
                      <TextView text={x.title} align={`center`} heading={3} color={`white`} />
                    </Column>
                  </Row>
                  <Row color="transparent">
                    <Column width="1-1" horizontalAlignment="center" verticalAlignment="center">
                      <TextView text={x.creator} align={`center`} heading={6} color={`white`} />
                      <TextView text={x.published.substring(0, 16)} align={`center`} heading={6} color={`white`} />
                    </Column>
                  </Row>
                </Column>
              </CardView>
            ))}
          </Column>
        </Row>

        <Row src={market} height="375px" img_size="auto 55%" color="secondary">
          <Column width="2-3" horizontalAlignment="center">
            <TextView text="Check out what other people made!" heading={1} align={`center`} />
          </Column>
          <Column width="2-3" horizontalAlignment="center" verticalAlignment="bottom">
            <ButtonView inline buttonType="alternate" text="UCL MARKETPLACE" link="/marketplace" />
          </Column>
        </Row>

        <Row isPadded color="splash-parallax">
          <Column width="2-3" horizontalAlignment="center">
            <TextView text={`Frequently Asked Questions`} heading={1} align={`center`} />
            {FAQ.map(x => (
              questionandanswer(x.question, x.answer)
            ))}
          </Column>
        </Row>

        <Footer />

      </>
    )
  }

}

ReactDOM.render(
  <HomePage />,
  document.querySelector(`.app`)
)

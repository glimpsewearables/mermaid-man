import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { userLogout } from '../../ReduxActions/UserActions';
import { Parallax, Background} from 'react-parallax';
import montage from "../../assets/montagehigh.mp4"
import "./Home.css"
import getBackgroundImg from "../../helpers/getBackgroundImg"
import Camera from "../../assets/Camera"
import Glasses from "../../assets/Glasses"
import World from "../../assets/World"
import Footer from './Footer'

class Home extends Component {
  render() {
    if(this.props.logout){
      return <Redirect to="/login" />
    }
    const backgroundStyle = getBackgroundImg("https://static.wixstatic.com/media/8b81a7_7993c177db104862854481500116554e~mv2.png/v1/crop/x_0,y_0,w_933,h_540/fill/w_933,h_540,al_c,q_85/Instasamples.webp", 'contain')
    return (
      <div className="home">

        <header className="homeHeader">
          <div className="homeHeaderWrapper">
            <div className="homeHeaderTitle">
              {/* GlipseCam // */}
            </div> 
            
              <Link to="/login" className="homeHeaderButton homeHeaderLoginButton">
                  Webapp Login 
              </Link>
          </div>
        </header>

        <div>
          <div className="homePageLanding">
            <video className="backgroundVideo" autoPlay>
              <source src={montage} type="video/mp4" />
            </video>     
          </div>
          <div className="overlayHome">
            <h1 className="heroTitle"> 
              GlimpseCam <br/>
              Capture your experience.
            </h1>
          </div>
        </div>
          <div className="containerSpacer">
            <div className="pick3">
              <div className="home3Grid">
                <div className="pick3Img">
                  <Camera />
                </div>
                <h2>GlimpseCam</h2>
                <p> 
                    Blendi fashion with a high tech device for seamless moment capture.
                </p>
              </div>
              <div className="home3Grid">
                <div className="pick3Img">
                  <Glasses />
                </div>
                <h2>Live in The Moment</h2>
                <p>
                    Simply push a button on the wearable to capture 10 seconds of media.
                </p>
              </div>
              <div className="home3Grid">
                  <div className="pick3Img">
                    <World />
                  </div>
                  <h2>Engage Your Experience</h2>
                <p>
                    By visiting our mobile and desktop app, you can see the photos for the event currated for you.
                </p>
              </div>
            </div>
          </div>

          <div className="containerSpace" >
            <div style={backgroundStyle}>
            </div>
          </div>
          <Footer backgroundStyle={backgroundStyle} />
      </div>
    )
  }
}

const HeroBanner = ({ image, min, max, children }) => (
  <div className="hero-container">
    <Parallax strength={300}>
        <Background className="custom-bg">
          <video className="backgroundVideo" autoPlay>
            <source className="backgroundVideo" src={montage} type="video/mp4" />
          </video>            
        </Background>
    </Parallax>
  </div>
);


const mapStateToProps = (state) => {
  return {
    logout: state.userLogout.logout
  }
}

export default connect(mapStateToProps)(Home)

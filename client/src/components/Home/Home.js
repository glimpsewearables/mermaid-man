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
  constructor(){
    super()
    this.run = this.run.bind(this)
    this.run();
  }

  run(){
    /*
    const root = document.createElement('div');
    document.body.appendChild(root);

    const scrollAnimation = { scrollTop: window.innerHeight };
    const scrollTop = 0;

    const tween = TweenLite.to(scrollAnimation, 2, {
        scrollTop: scrollTop,
        ease: Power2.easeInOut,
        onUpdate: () => {
            window.scrollTo(0, scrollAnimation.scrollTop);
        }
    });

    window.addEventListener('mousewheel', function mouseHandler() {
        tween.kill();
        window.removeEventListener('mousewheel', mouseHandler, false);
    }, false);
    */
  }
  render() {
    if(this.props.logout){
      return <Redirect to="/login" />
    }
    const backgroundStyle = getBackgroundImg("https://static.wixstatic.com/media/8b81a7_7993c177db104862854481500116554e~mv2.png/v1/crop/x_0,y_0,w_933,h_540/fill/w_933,h_540,al_c,q_85/Instasamples.webp")
    return (
      <div className="home">

        <header className="homeHeader">
          <div className="homeHeaderWrapper">
            <div className="homeHeaderTitle">
              {/* GlipseCam // */}
            </div> 
            <div className="homeHeaderButton homeHeaderLoginButton">
              <Link to="/login">
                <button >
                  Webapp Login 
                </button>
              </Link>
            </div>
          </div>
        </header>

        <div>
          <div className="homePageLanding">
            <video autoPlay className="backgroundVideo" >
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
                <h2>Bring GlimpseCam</h2>
                <div className="pick3Img">
                  <Camera />
                </div>
                <div>
                  
                </div>
              </div>
              <div className="home3Grid">
                <h2>Live in The Moment</h2>
                <div className="pick3Img">
                  <Glasses />
                </div>
                <div>
                </div>
              </div>
              <div className="home3Grid">
                <h2>Capture  Your Experience</h2>
                  <div className="pick3Img">
                    <World />
                  </div>
                <div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
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

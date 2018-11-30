import React, { Component } from 'react'
import GlimpseGallery from "../GlimpseGallery/GlimpseGallery";
import './Events.css'
import '../../assets/welcome-img.jpg'

const imgStyle = (url) =>{
  return  ({ backgroundImage: ['url(',url,  ')'].join(''),
            backgroundSize: "cover",
                      })
}
export default class Events extends Component{
  componentWillMount(){
    //getPhotos();
    //shove photos into arrays as necessary.
  }


  render() {
    const welcomeImage = imgStyle('https://invibed.com/wp-content/uploads/2016/01/rsz_millennials_-_music_festival_friends_carrying_one_girl.jpg');
    const tileImage = imgStyle('https://i.scdn.co/image/c54aeee5871632de61735ae7ed53e07cdb45ef70')
    console.log(this.props.onEventSelect)
    return (
        <div>
        <div className="welcomeImage" style={welcomeImage}>
          <div className="eventsWelcome">
            Dive into the experiences <br />that matter to you
          </div>
        </div>
        <div className="Event">
          <div className="pastEvents">
          </div>
          {/* 
              <GlimpseGallery
                  color={this.props.color}
                  title={this.props.title}
                  date={this.props.date}
              />
            */}
          
          <div className="eventContainer" onClick={this.props.onEventSelect}>
            <div className="eventTile" style={tileImage} >
            </div>
            <div className="eventTileTitle">
              <h2>Louis the Child</h2>
              <div className="eventTitleDetails">
                  <h3>12/1/18 </h3>
                  <span className="dot"></span>

                  <h3> Seattle, WA</h3>
              </div>
            </div>
            
        
          </div>
        </div>
      </div>
    )
  }
}

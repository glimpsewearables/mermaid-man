import React, { Component } from 'react'
import GlimpseGallery from "../GlimpseGallery/GlimpseGallery";
import EventTile from "./EventTile";

import './Events.css'

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
          {/*
          <EventTile 
            title="Captol Records"
            location="Los Angeles, CA"
            date="12/1/18"
            id="0"
            onClick={this.props.onEventSelect}
            imgUrl={"https://pbs.twimg.com/profile_images/645928617143332864/q-Me9MKS_400x400.jpg"}
          />
          */}
          <EventTile 
             title="Louis The Child"
             location="Seattle, WA"
             date="12/1/18"
             id="2"
             onClick={this.props.onEventSelect}
             imgUrl={"https://i.scdn.co/image/c54aeee5871632de61735ae7ed53e07cdb45ef70"}
          />

          <EventTile 
             title="Miscellaneous"
             location="Seattle, WA"
             date="12/5/18"
             id="1"
             onClick={this.props.onEventSelect}
             imgUrl={"https://s3-us-west-2.amazonaws.com/users-edited-content/DSC_0098.JPG"}
          />
        </div>
      </div>
    )
  }
}

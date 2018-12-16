import React, { Component } from 'react'
import GlimpseGallery from "../GlimpseGallery/GlimpseGallery";
import EventTile from "./EventTile";
import './Events.css'
import { connect } from "react-redux"
import { getAllEvents } from "../../ReduxActions/EventActions"
import { withRouter, Redirect } from 'react-router-dom'

const imgStyle = (url) =>{
  return  ({ backgroundImage: ['url(',url,  ')'].join(''),
            backgroundSize: "cover",
                      })
}

class Events extends Component{
  constructor(props){
    super();

    this.eventSelect = this.eventSelect.bind(this);
  }
  componentWillMount(){
    this.props.getAllEvents();
  }

  eventSelect(id){
    let { history } = this.props;
    history.push("/events/" + id);
  }

  render() {
    const welcomeImage = imgStyle('https://invibed.com/wp-content/uploads/2016/01/rsz_millennials_-_music_festival_friends_carrying_one_girl.jpg');
    let { events } = this.props;
    if(events === undefined){
      events = {};
    }

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
            <EventTile 
              title="Capitol Records"
              place="Los Angeles, CA"
              date="12/1/18"
              eventId="nulllll"
              imgUrl={"https://pbs.twimg.com/profile_images/645928617143332864/q-Me9MKS_400x400.jpg"}
            /> */}

            <EventTile 
              title="Louis the Child"
              loc="LouistheChild"
              urlName="LouistheChild"
              eventId={2}
              place="Seattle, WA"
              date="12/1/18"
              onClick={(id) => this.eventSelect(id)}
              imgUrl={"https://i.scdn.co/image/c54aeee5871632de61735ae7ed53e07cdb45ef70"}
            />
    
            <EventTile 
              title="Miscellaneous"
              place="Seattle, WA"
              urlName="Miscellaneous"
              eventId={0}
              date="12/5/18"
              onClick={(id) => this.eventSelect(id)}
              imgUrl={"https://s3-us-west-2.amazonaws.com/users-edited-content/DSC_0098.JPG"}
            />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (store) =>{
  return {
    events : store.sendEvents.events
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllEvents: () => dispatch(getAllEvents())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Events);


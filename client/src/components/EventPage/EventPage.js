import React, { Component } from 'react'
import { connect } from 'react-redux'

import GlimpseGallery from "../GlimpseGallery/GlimpseGallery"
import SliderWrapper1 from "../GlimpseGallery/SliderWrapper1"
import Banner from "./Banner"
import Filters from "./Filters"

import "./EventPage.css"

class EventPage extends Component {
  constructor(){
      super();

      this.state = {
        open: true,
        media: [],
        objects: [],
      }

      this.filterBy = this.filterBy.bind(this);
  }

  componentWillMount() {

      // get content for a specific user retrieved via sessionstorage
    const url = '/media/getAllUserMedia/' + sessionStorage.getItem("device");
    fetch(url, {
      method: 'GET',
      headers: {'Content-Type':'application/json','Access-Control-Allow-Origin': '*',},
    }).then( res => res.json() )
    .then(
      (res) => {
        let d = JSON.parse(res.data).raw_media.media;
        this.setState({media: d})
      },(error) => {
        console.log(error)
      }
    ); 
  }

  render() {
    //debug information 
    //let media = [{"created_at": "2018-11-14T05:01:59.612603", "downloaded": 0, "id": 4, "link": "https://s3.amazonaws.com/pi-4/DSC_0013.JPG", "media_type": "image", "ranking": 1, "raw_or_edited": "raw", "resource_uri": "/api/media/4/", "updated_at": "2018-11-14T05:01:59.612660"},{"ranking":1,"device_id":"1","created_at":"2018-12-02 00:22:00.393180+00:00","user_id":"1","link":"https://s3-us-west-2.amazonaws.com/users-raw-content/user1_video_2018-12-01_12.16.23.mp4","updated_at":"2018-12-02 00:22:00.393217+00:00","raw_or_edited":"raw","downloaded":0,"media_type":"video","event_id":"3"},{"ranking":1,"device_id":"1","created_at":"2018-12-02 00:22:17.275749+00:00","user_id":"1","link":"https://s3-us-west-2.amazonaws.com/users-raw-content/user1_video_2018-12-01_12.17.41.mp4","updated_at":"2018-12-02 00:22:17.275787+00:00","raw_or_edited":"raw","downloaded":0,"media_type":"video","event_id":"3"},{"ranking":1,"device_id":"1","created_at":"2018-12-02 00:22:40.786630+00:00","user_id":"1","link":"https://s3-us-west-2.amazonaws.com/users-raw-content/user1_video_2018-12-01_08.57.19.mp4","updated_at":"2018-12-02 00:22:40.786672+00:00","raw_or_edited":"raw","downloaded":0,"media_type":"video","event_id":"3"},{"ranking":1,"device_id":"1","created_at":"2018-12-02 00:23:24.282414+00:00","user_id":"1","link":"https://s3-us-west-2.amazonaws.com/users-raw-content/user1_video_2018-12-01_08.50.00.mp4","updated_at":"2018-12-02 00:23:24.282449+00:00","raw_or_edited":"raw","downloaded":0,"media_type":"video","event_id":"3"},{"ranking":1,"device_id":"1","created_at":"2018-12-02 00:23:58.393987+00:00","user_id":"1","link":"https://s3-us-west-2.amazonaws.com/users-raw-content/user1_video_2018-12-01_06.31.57.mp4","updated_at":"2018-12-02 00:23:58.394031+00:00","raw_or_edited":"raw","downloaded":0,"media_type":"video","event_id":"3"}];
    const media = this.state.media;
    const imgSrc = media.map( (el, index) => ({ "src":el.link, 'media':el.media_type, index: index}) );
    const highlights = Arrays.copyOfRange(media, 2, 5);
    return (
      <div>
        <Banner 
          title={"Capitol Records"}
          date={"12/01/2018"}
          dot={true}
          location={"Los Angeles, WA"}/>
      
      {/* Experimental component
       <Filters
          onClick={this.filterBy}
      /> 
      */}
      
       {/* Option A: Curated carousel  */}
        <SliderWrapper1 
          color="#F8B800" 
          title={"CLiP Photos".split(" ")}
          photos={media} /> 

       {/* Option B: Currated Gallery  
       <GlimpseGallery 
          color="#070250" 
          title={"Highlights".split(" ")}
          photos={media.splice(1,4)} 
          srcImgs={imgSrc.splice(1,4)} />  */}

        <GlimpseGallery 
          color="#F8B800" 
          title={"CLiP Photos".split(" ")}
          date={"10/12/18"} 
          photos={media} 
          srcImgs={imgSrc} /> 
      </div>
    )
  }

  // Experimental component ignore for Louis
  filterBy(filterName){
    let filters  = { ...this.state.filters }
    for(var i = 0; i < filters.length; i++){
      if(filters[i].name == filterName){
        filters.active = true;
      } else{
        filters.active = false;
      }
    }
    this.setState({filters:filters});
  }
}

// Redux
function mapStateToProps(state){
    return {
        objects: state.objects,
    }
}

export default connect(mapStateToProps)(EventPage);

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
    //const media = this.state.media;
    let media = [{"created_at": "2018-11-14T05:01:59.612603", "downloaded": 0, "id": 4, "link": "https://s3.amazonaws.com/pi-4/DSC_0013.JPG", "media_type": "image", "ranking": 1, "raw_or_edited": "raw", "resource_uri": "/api/media/4/", "updated_at": "2018-11-14T05:01:59.612660"},{"ranking":1,"device_id":"1","created_at":"2018-12-02 00:22:00.393180+00:00","user_id":"1","link":"https://s3-us-west-2.amazonaws.com/users-raw-content/user1_video_2018-12-01_12.16.23.mp4","updated_at":"2018-12-02 00:22:00.393217+00:00","raw_or_edited":"raw","downloaded":0,"media_type":"video","event_id":"3"},{"ranking":1,"device_id":"1","created_at":"2018-12-02 00:22:17.275749+00:00","user_id":"1","link":"https://s3-us-west-2.amazonaws.com/users-raw-content/user1_video_2018-12-01_12.17.41.mp4","updated_at":"2018-12-02 00:22:17.275787+00:00","raw_or_edited":"raw","downloaded":0,"media_type":"video","event_id":"3"},{"ranking":1,"device_id":"1","created_at":"2018-12-02 00:22:40.786630+00:00","user_id":"1","link":"https://s3-us-west-2.amazonaws.com/users-raw-content/user1_video_2018-12-01_08.57.19.mp4","updated_at":"2018-12-02 00:22:40.786672+00:00","raw_or_edited":"raw","downloaded":0,"media_type":"video","event_id":"3"},{"ranking":1,"device_id":"1","created_at":"2018-12-02 00:23:24.282414+00:00","user_id":"1","link":"https://s3-us-west-2.amazonaws.com/users-raw-content/user1_video_2018-12-01_08.50.00.mp4","updated_at":"2018-12-02 00:23:24.282449+00:00","raw_or_edited":"raw","downloaded":0,"media_type":"video","event_id":"3"},{"ranking":1,"device_id":"1","created_at":"2018-12-02 00:23:58.393987+00:00","user_id":"1","link":"https://s3-us-west-2.amazonaws.com/users-raw-content/user1_video_2018-12-01_06.31.57.mp4","updated_at":"2018-12-02 00:23:58.394031+00:00","raw_or_edited":"raw","downloaded":0,"media_type":"video","event_id":"3"}];
    //const initialState = {"meta": {"limit": 20, "next": "/api/media/?limit=20&offset=20", "offset": 0, "previous": null, "total_count": 30}, "objects": [{"created_at": "2018-11-14T05:01:59.587660", "downloaded": 0, "id": 1, "link": "https://s3.amazonaws.com/pi-4/5_user5_video_2018-07-28_18.46.00.mp4", "media_type": "video", "ranking": 1, "raw_or_edited": "raw", "resource_uri": "/api/media/1/", "updated_at": "2018-11-14T05:01:59.587714"}, {"created_at": "2018-11-14T05:01:59.597152", "downloaded": 0, "id": 2, "link": "https://s3.amazonaws.com/pi-4/DSC_0008.JPG", "media_type": "image", "ranking": 1, "raw_or_edited": "raw", "resource_uri": "/api/media/2/", "updated_at": "2018-11-14T05:01:59.597205"},{"created_at": "2018-11-14T05:01:59.612603", "downloaded": 0, "id": 4, "link": "https://s3.amazonaws.com/pi-4/DSC_0013.JPG", "media_type": "image", "ranking": 1, "raw_or_edited": "raw", "resource_uri": "/api/media/4/", "updated_at": "2018-11-14T05:01:59.612660"}, {"created_at": "2018-11-14T05:01:59.635617", "downloaded": 0, "id": 6, "link": "https://s3.amazonaws.com/pi-4/DSC_0017.JPG", "media_type": "image", "ranking": 1, "raw_or_edited": "raw", "resource_uri": "/api/media/6/", "updated_at": "2018-11-14T05:01:59.635680"}, {"created_at": "2018-11-14T05:01:59.646962", "downloaded": 0, "id": 7, "link": "https://s3.amazonaws.com/pi-4/DSC_0018.JPG", "media_type": "image", "ranking": 1, "raw_or_edited": "raw", "resource_uri": "/api/media/7/", "updated_at": "2018-11-14T05:01:59.647009"}, {"created_at": "2018-11-14T05:01:59.658972", "downloaded": 0, "id": 8, "link": "https://s3.amazonaws.com/pi-4/DSC_0020.JPG", "media_type": "image", "ranking": 1, "raw_or_edited": "raw", "resource_uri": "/api/media/8/", "updated_at": "2018-11-14T05:01:59.659023"}, {"created_at": "2018-11-14T05:01:59.668903", "downloaded": 0, "id": 9, "link": "https://s3.amazonaws.com/pi-4/DSC_0022.JPG", "media_type": "image", "ranking": 1, "raw_or_edited": "raw", "resource_uri": "/api/media/9/", "updated_at": "2018-11-14T05:01:59.668951"}, {"created_at": "2018-11-14T05:01:59.686855", "downloaded": 0, "id": 10, "link": "https://s3.amazonaws.com/pi-4/DSC_0053.JPG", "media_type": "image", "ranking": 1, "raw_or_edited": "raw", "resource_uri": "/api/media/10/", "updated_at": "2018-11-14T05:01:59.686998"}, {"created_at": "2018-11-14T05:01:59.704821", "downloaded": 0, "id": 11, "link": "https://s3.amazonaws.com/pi-4/DSC_0056.JPG", "media_type": "image", "ranking": 1, "raw_or_edited": "raw", "resource_uri": "/api/media/11/", "updated_at": "2018-11-14T05:01:59.704894"}, {"created_at": "2018-11-14T05:01:59.736563", "downloaded": 0, "id": 12, "link": "https://s3.amazonaws.com/pi-4/DSC_0060.JPG", "media_type": "image", "ranking": 1, "raw_or_edited": "raw", "resource_uri": "/api/media/12/", "updated_at": "2018-11-14T05:01:59.736746"}, {"created_at": "2018-11-14T05:01:59.761501", "downloaded": 0, "id": 13, "link": "https://s3.amazonaws.com/pi-4/DSC_0061.JPG", "media_type": "image", "ranking": 1, "raw_or_edited": "raw", "resource_uri": "/api/media/13/", "updated_at": "2018-11-14T05:01:59.761559"}, {"created_at": "2018-11-14T05:01:59.772745", "downloaded": 0, "id": 14, "link": "https://s3.amazonaws.com/pi-4/DSC_0062.JPG", "media_type": "image", "ranking": 1, "raw_or_edited": "raw", "resource_uri": "/api/media/14/", "updated_at": "2018-11-14T05:01:59.772801"}, {"created_at": "2018-11-14T05:01:59.796478", "downloaded": 0, "id": 15, "link": "https://s3.amazonaws.com/pi-4/DSC_0063.JPG", "media_type": "image", "ranking": 1, "raw_or_edited": "raw", "resource_uri": "/api/media/15/", "updated_at": "2018-11-14T05:01:59.796547"}, {"created_at": "2018-11-14T05:01:59.819862", "downloaded": 0, "id": 16, "link": "https://s3.amazonaws.com/pi-4/DSC_0064.JPG", "media_type": "image", "ranking": 1, "raw_or_edited": "raw", "resource_uri": "/api/media/16/", "updated_at": "2018-11-14T05:01:59.819908"}, {"created_at": "2018-11-14T05:01:59.838424", "downloaded": 0, "id": 17, "link": "https://s3.amazonaws.com/pi-4/DSC_0065.JPG", "media_type": "image", "ranking": 1, "raw_or_edited": "raw", "resource_uri": "/api/media/17/", "updated_at": "2018-11-14T05:01:59.838487"}, {"created_at": "2018-11-14T05:01:59.846000", "downloaded": 0, "id": 18, "link": "https://s3.amazonaws.com/pi-4/DSC_0066.JPG", "media_type": "image", "ranking": 1, "raw_or_edited": "raw", "resource_uri": "/api/media/18/", "updated_at": "2018-11-14T05:01:59.846035"}, {"created_at": "2018-11-14T05:01:59.857091", "downloaded": 0, "id": 19, "link": "https://s3.amazonaws.com/pi-4/DSC_0067.JPG", "media_type": "image", "ranking": 1, "raw_or_edited": "raw", "resource_uri": "/api/media/19/", "updated_at": "2018-11-14T05:01:59.857155"}, {"created_at": "2018-11-14T05:01:59.872450", "downloaded": 0, "id": 20, "link": "https://s3.amazonaws.com/pi-4/DSC_0068.JPG", "media_type": "image", "ranking": 1, "raw_or_edited": "raw", "resource_uri": "/api/media/20/", "updated_at": "2018-11-14T05:01:59.872544"}]};
   // const media = initialState.objects;
    const imgSrc = media.map( (el, index) => ({ "src":el.link, 'media':el.media_type, index: index}) );
    const highlights = media.slice(1,3);
    const highlightSrc = imgSrc.slice(1,3);
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
      
       {/* Option A: Curated carousel */}
        <SliderWrapper1 
          color="#F8B800" 
          title={"CLiP Photos".split(" ")}
          photos={highlights}
          onClick={null}
          srcImgs={highlightSrc} />

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

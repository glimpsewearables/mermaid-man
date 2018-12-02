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

  // get content for a specific user retrieved via sessionstorage
  componentWillMount() {
    const url = '/media/getAllUserMedia/1';
    // console.log(url);
    fetch(url, {
      method: 'GET',
      headers: {'Content-Type':'application/json','Access-Control-Allow-Origin': '*',},
    }).then( res => res.json() )
    .then(
      (res) => {
        let d = JSON.parse(res.data).raw_media.media;
        console.log(d)
        //console.log('entered response')
        //console.log("fetch media:" , res);
        this.setState({media: d})
      },(error) => {
        console.log(error)
      }
    );
  }

  render() {
    const media = this.state.media;
    const imgSrc = media.map(el => ({ "src":el.link}) );
    console.log("imgs", imgSrc);
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
      
       {/* Option A: Curated carousel 
        <SliderWrapper1 
          color="#F8B800" 
          title={"CLiP Photos".split(" ")}
          photos={media} />  */}

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

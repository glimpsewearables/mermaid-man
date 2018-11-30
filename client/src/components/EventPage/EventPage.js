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
      }

      this.filterBy = this.filterBy.bind(this);
  }

  componentWillMount() {
    fetch('/media/getAllImages', {
      method: 'GET',
      headers: {'Content-Type':'application/json','Access-Control-Allow-Origin': '*',},
    }).then(res => res.json())
    .then(
      (res) => {
        console.log(res.media)
        this.setState({media: res.media})
      },(error) => {
        console.log(error)
      }
    );
  }

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

  render() {
    const { filters } = this.state;
    const media = this.props.objects;
    const imgSrc = media.map(el => ({ "src":el.link}) );
    return (
      <div>
        <Banner 
          title={"Louis the Child"}
          date={"12/01/2018"}
          dot={true}
          location={"Seattle, WA ~ Wamu Theater"}/>
      
      {/* Filters still being build
       <Filters
          onClick={this.filterBy}
      /> 
      */}
      
       {/* Option A: Curated carousel   */}
        <SliderWrapper1 
          color="#F8B800" 
          title={"CLiP Photos".split(" ")}
          photos={media}/>

       {/* Option B: Gallery part 2 */}
       <GlimpseGallery 
          color="#070250" 
          title={"Highlights".split(" ")}
          photos={media.splice(1,4)} 
          srcImgs={imgSrc.splice(1,4)}/> 

        <GlimpseGallery 
          color="#F8B800" 
          title={"CLiP Photos".split(" ")}
          date={"10/12/18"} 
          photos={media} 
          srcImgs={imgSrc}/> 

      </div>
    )
  }
}

function mapStateToProps(state){
    return {
        objects: state.objects,
    }
}

export default connect(mapStateToProps)(EventPage);

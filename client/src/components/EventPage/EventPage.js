import React, { Component } from 'react'

import GlimpseGallery from "../GlimpseGallery/GlimpseGallery"

import SliderWrapper1 from "../GlimpseGallery/SliderWrapper1"
import SliderWrapper2 from "../GlimpseGallery/SliderWrapper2"
import "./EventPage.css"
import { connect } from 'react-redux'

import Banner from "./Banner"
import Filters from "./Filters"



class EventPage extends Component {
  constructor(){
      super();

      this.state = {
        open: true,
        media: []
      }

      this.filterBy = this.filterBy.bind(this);
  }

  componentWillMount() {
    fetch('http://52.32.199.147:8000/media/getAllImages', {
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

  filterBy(events){
    console.log(events.target);
    return
  }

  render() {
    const media = this.state.media;
    console.log(media);
    const imgSrc = media.map(el => ({ "src":el.link}) );
    return (
      <div>
        <Banner 
          title={"Louis the Child"}
          date={"12/01/2018"}
          dot={true}
          location={"Seattle, WA ~ Wamu Theater"}/>
   {/**
        <Filters 
          onClick={this.filterBy}
        />*/}
      
        <SliderWrapper1 
          color="#F8B800" 
          title={"CLiP Photos".split(" ")}
          photos={media}/>

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

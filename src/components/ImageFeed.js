import React, { Component } from 'react';
import Gallery from '../Gallery/Gallery';
import Lightbox from '../lightbox/Lightbox';
import axios from "axios";

const photos = [
  { src: 'https://source.unsplash.com/2ShvY8Lf6l0/800x599', width: 1, height: 1 },
  { src: 'https://source.unsplash.com/Dm-qxdynoEc/800x799', width: 1, height: 1 },
  { src: 'https://source.unsplash.com/qDkso9nvCg0/600x799', width: 1, height: 1 },
  { src: 'https://source.unsplash.com/iecJiKe_RNg/600x799', width: 1, height: 1 },
  { src: 'https://source.unsplash.com/epcsn8Ed8kY/600x799', width: 1, height: 1 },
  { src: 'https://source.unsplash.com/NQSWvyVRIJk/800x599', width: 1, height: 1 },
  { src: 'https://source.unsplash.com/zh7GEuORbUw/600x799', width: 1, height: 1 },
  { src: 'https://source.unsplash.com/PpOHJezOalU/800x599', width: 1, height: 1 },
  { src: 'https://source.unsplash.com/I1ASdgphUH4/800x599', width: 1, height: 1 }
];

function getXY(media){
  let m = [];
  //media.map(item => m.append( {src: item, width:1, height:1} ) ;
  return m;
}

class ImageFeed extends Component {
  constructor(props){
    super(props);

    this.state = { 
      currentImage:0,
      userImgs:{},
      userVideos:{} 
    };

    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
    this.getUserMedia = this.getUserMedia.bind(this);
  }

  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  }

  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }

  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }

  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }

  componentWillMount(){
  }
  
  getUserMedia(){
    /*
    axios.(method: 'POST',
            url:"http://127.0.0.1:8000/getOneUser",
            config : {headers: { 
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept,  application/json",
                    "Content-Type": 'application/json') 
    .then(function(rsp){
      let img = null;
      let video = null;
      console.log("we got a response")
      /*Object.keys(rsp).map( (key, indexX) =>
        rsp[key].imgs.map( item, indexY) => 1);
        imgs.append( rsp[key].imgs),
        video.append(rsp[key].vid)
      )
      //this.setState({userImgs:imgs, userVideos:video})
    }).catch(function(error){
      console.log(error)
    })*/
  }

  render() {
    /*axios({method: 'GET',
            url:"http://34.207.219.52/media/getAllVideos",
            config : {headers: { 
                    "Access-Control-Allow-Origin": "POST, GET, OPTIONS",
                    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, application/json",
                    "Content-Type": 'application/json' }}
                  }).then(function(rsp){
                    console.log(rsp);
                  }).catch(function(error){
                    console.log(error)
                  });
    */

    return (
      <div className="Gallery">
        <div className="gallery">
          <Gallery photos={photos} onClick={this.openLightbox} />
          <Lightbox images={photos}
            onClose={this.closeLightbox}
            onClickPrev={this.gotoPrevious}
            onClickNext={this.gotoNext}
            currentImage={this.state.currentImage}
            isOpen={this.state.lightboxIsOpen}
          />
        </div>
      </div>
    );
  }
}

export default ImageFeed;
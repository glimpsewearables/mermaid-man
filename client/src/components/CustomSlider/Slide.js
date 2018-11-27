import React, { Component } from 'react'

export default class Slide extends Component {
  render() {
    return (
        <div class="video-slide">
            <video width="1000" controls>
                <source src="https://s3.amazonaws.com/glimpse-q1-demo/Highlight+Festival+2018++Official+Aftermovie.mp4" 
                            type="video/mp4" />
                Your browser does not currenttly support our video platform.
            </video>
        </div>
    )
  }
}

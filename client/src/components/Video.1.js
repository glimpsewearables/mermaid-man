import React, { Component } from 'react'
import { Player } from 'video-react';

export default class Video extends Component {
  render() {
    return (
        <Player
            playsInline
            poster="../assets/add.png"
            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
    )
  }
}

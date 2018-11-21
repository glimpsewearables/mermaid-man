import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import sizeMe from 'react-sizeme';

class Video extends Component {
  render() {
    let vid = () => {<video controls >
                        <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>  };

    let { width, height} = this.props.size;
    console.log(height);
    return (
        <div className="videoGrid">
            <video controls className="videoContent">
                <source src="https://s3.amazonaws.com/glimpse-q1-demo/Highlight+Festival+2018++Official+Aftermovie.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    )
  }
}

export default sizeMe()(Video);

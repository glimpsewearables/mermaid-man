import React, { Component } from 'react'

const createBackground = (url) =>{
    return  ({ backgroundImage: ['url(',url,  ')'].join(''),
              backgroundSize: "cover",
                        })
  }

export default class EventTile extends Component {
  render() {
    const { imgUrl, onClick } = this.props;
    const imgStyle = createBackground(imgUrl);
    console.log(onClick);
    return (
        <div>
            <div className="eventContainer" onClick={onClick}>
                <div className="eventTile" style={imgStyle} >
                </div>
                <div className="eventTileTitle">
                <h2>Louis the Child</h2>
                    <div className="eventTitleDetails">
                        <h3>12/1/18 </h3>
                        <span className="dot"></span>

                        <h3> Seattle, WA</h3>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

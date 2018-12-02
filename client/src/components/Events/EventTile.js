import React, { Component } from 'react'

export default class EventTile extends Component {
    constructor(props){
        super(props)

        this.createBackground = this.createBackground.bind(this)
    }
    createBackground = (url) =>{
        return  ({ backgroundImage: ['url(',url,  ')'].join(''),
                  backgroundSize: "cover",
                            })
      }
    
  render() {
    const { imgUrl, onClick, title, date, location } = this.props;
    const imgStyle = this.createBackground(imgUrl);
    console.log(imgUrl, title);
    return (
        <div className="eventContainer" onClick={onClick}>
            <div className="eventTile" style={imgStyle} >
            </div>
            <div className="eventTileTitle">
            <h2>{ title }</h2>
                <div className="eventTitleDetails">
                    <h3>{ date }</h3>
                    <span className="dot"></span>

                    <h3> { location }</h3>
                </div>
            </div>
        </div>
    )
  }
}

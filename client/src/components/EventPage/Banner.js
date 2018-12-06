import React, { Component } from 'react'

const imgStyle = (url) =>{
    return  ({ backgroundImage: ['url(',url,  ')'].join(''),
              backgroundSize: "cover",
                        })
  }

export default class Banner extends Component {
  render() {
    let { title, date , location, dot } = this.props;
    const backgroundImg = "https://s3-us-west-2.amazonaws.com/users-edited-content/seattle.jpg"
    const style = imgStyle(backgroundImg);

    return (
        <div className="eventBanner" style={style}>
          <div className="eventTitle pageEventTitle">
            <h1> {title} </h1>
            <div className="eventTitleDetails pageEventDetails">
              <h2> {date} </h2>
              { dot ?<span className="dot"></span>  :null }
              <h2> {location} </h2>
            </div>
          </div>
        </div>
    )
  }
}

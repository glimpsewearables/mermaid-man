import React, { Component } from 'react'

const imgStyle = (url) =>{
    return  ({ backgroundImage: ['url(',url,  ')'].join(''),
              backgroundSize: "cover",
                        })
  }

export default class Banner extends Component {
  render() {
    let { title, date , location, dot } = this.props;
    const backgroundImg = "https://edm.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_768/MTU2MTc5NzMwODA5MjM0NzAx/betternot_bts-45-2.jpg"
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

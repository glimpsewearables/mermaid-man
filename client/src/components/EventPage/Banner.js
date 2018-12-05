import React, { Component } from 'react'
import bannerContent from "./bannerContent"

const imgStyle = (url) =>{
    return  ({ backgroundImage: ['url(',url,  ')'].join(''),
              backgroundSize: "cover",
                        })
  }

  export default class Banner extends Component {
  render() {
    const { dot } = this.props;
    const loc = window.location.href.split('/');
    let event = bannerContent.objects.filter(el => el.event == loc[ loc.length -1 ]);
    event = event[0];
    const style = imgStyle(event.banner);
    console.log(event);

    return (
        <div className="eventBanner" style={style}>
           <div className="eventTitle pageEventTitle">
            <h1> { event.name }</h1>
            <div className="eventTitleDetails pageEventDetails">
              <h2> { event.date } </h2>
              { dot ? <span className="dot"></span>  :null }
              <h2> { event.location } </h2>
            </div>
          </div>
         </div>
          
    )
  }
}


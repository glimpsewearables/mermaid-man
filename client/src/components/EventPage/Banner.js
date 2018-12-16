import React, { Component } from 'react'
import bannerContent from "./bannerContent"

export default class Banner extends Component {
  render() {
    const { dot, title, date, banner, location} = this.props;
    const loc = window.location.href.split('/');
    let event = bannerContent.objects.filter(el => el.event === loc[ loc.length -1 ]);
    event = event[0];
    const style = imgStyle(banner);
    console.log(title);
    return (
        <div className="eventBanner" style={style}>
           <div className="eventTitle pageEventTitle">
            <h1> { title }</h1>
            <div className="eventTitleDetails pageEventDetails">
              <h2> { date } </h2>
              { dot ? <span className="dot"></span>  :null }
              <h2> { location } </h2>
            </div>
          </div>
         </div>
          
    )
  }
}

const imgStyle = (url) =>{
  return  ({ backgroundImage: ['url(',url,  ')'].join(''),
            backgroundSize: "cover",
                      })
}


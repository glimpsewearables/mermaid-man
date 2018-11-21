import React, { Component } from 'react'

export default class TitleCard extends Component {
  render() {
    let style = { "backgroundColor":this.props.color };
    const { title, date } = this.props;
    console.log(title);
    return (
      <div className="cardColor" style={style}>
        <div className="colorSpan">
          <span className="cardTitleEvent">{title}</span><br/>
          <span className="cardTitleDate">{date}</span>
        </div>
      </div>
    )
  }
}

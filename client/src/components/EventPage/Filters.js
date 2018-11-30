import React, { Component } from 'react'
const filters = ["1", "2", "global media"];

export default class Filters extends Component {
  render() {
    return (
      <div className="Filters">
        {filters.map( el =>
          <div className="filter" onClick={this.props.onClick} name={el}> {el}</div>
        )}
      </div>
    )
  }
}

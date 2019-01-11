import React, { Component } from 'react'

export default class TextField extends Component {
  render() {
    let { title, value, onChange } = this.props;

    return (
        <div>
        <label >{ title }:</label> <br />
        <input
            className="deviceInput"
            name={value}
            type="text"
            value={value}
            onChange={onChange}
        />
    </div>
    )
  }
}

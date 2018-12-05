import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
  render() {
    const buttonStyle = { "background-color":"black", "color":"white", "padding":"10px", "display":"block"}
    return (
      <div>
          Home Page
          <Link to="/login">
            <button  style={buttonStyle}>
                    Login
            </button>
          </Link>
      </div>
    )
  }
}

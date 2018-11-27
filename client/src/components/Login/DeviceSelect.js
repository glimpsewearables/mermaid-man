import React, { Component } from "react"
import { connect } from "react-redux"
import "./Login.css";
import EventImage from "../../assets/EventImage"

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      device: null,
      password: ""
    };

    this.onClick = this.onClick.bind(this);
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({[event.target.id]: event.target.value});
  }

  handleSubmit = event => {
    event.preventDefault();
  }
  
  onClick(event) {
    sessionStorage.setItem('device', this.state.device);
    event.preventDefault();
    this.props.onDeviceSelect();
    return
  }

  render() {
    return (
      <div className="Login">
        <div className="wordsToLiveByWrapper">
          <div className="wordsToLiveBy">
            <b>Welcome to the unveiling of the first CLiP wearable at Louis the Child.</b> 
            <br /><br />We are excited to give you a tool that can make your concert experience even better. Have a blast!          
          </div>
          <EventImage name="eventImage" />
        </div>
        <div className="loginWrapper">
            <h1 className="logoTitleLogin">CLiP</h1>
            <form action="/action_page.php" className="button">
                <p className="signInTitle"> Choose Device</p>

                <div className="formGroup">
                    <select>
                        { this.props.tags.map((tag) => <option value="device">{tag}</option>) }
                    </select>
                </div>
                <button type="submit" onClick={this.onClick} className="btnLogin">Select</button>
                <p className="signUpLink">
                  Have a question? <a href="">email us</a>
                </p>
            </form>
            
        </div>

      </div>
    );
  }
}

function mapStateToProps(state){
  return {
      //tags:state.tags
      tags: ["All Images"]
  }
}

export default  connect(mapStateToProps)(Login);
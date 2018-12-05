import React, { Component } from "react"
import { connect } from "react-redux"
import "./Login.css";
import EventImage from "../../assets/EventImage"
import TextField from "./TextField"

function isValidUser(user, currUsers = [], devices = []){
  if( findDeviceId(user.device, devices).length == 0 ){
    return "Invalid deviceID, please contact Glimpse member for assistance."
  }if( isNameTaken(user.name, currUsers).length >= 1 ){
    return "Name already used,"
  }if(!isValidEmail(user.email)){
    return "Type a valid email address (e.g. example@gmail.com)"
  }
  return true
}

function isNameTaken(userName, users){
  return users.filter( el => el.first_name == userName)
}

// helper function to validate DeviceId
function findDeviceId(id, devices){
  return devices.filter( el => Number(el.device_number) == id )
}

function isValidEmail(email, ) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: { name:'', device:'', email:''},
      currUsers: null,
      devices:null,
      errorMsg: ''
    };
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeFor = this.handleChangeFor.bind(this);
  }

  componentWillMount(){
    // get all users... in case we need to validate in the future
    // fetch('/api/user/', {
    //     method: 'GET',
    //     headers: {'Content-Type':'application/json','Access-Control-Allow-Origin': '*',},
    //   }).then(res => res.json())
    //   .then(
    //     (res) => {
    //       console.log( JSON.parse(res.data).objects);
    //       this.setState({currUsers: JSON.parse(res.data).objects})
    //     },(error) => {
    //       console.log(error)
    //     }
    //   );

      //get devices so we know to validate device input from user
      fetch('/api/device/', {
        method: 'GET',
        headers: {'Content-Type':'application/json','Access-Control-Allow-Origin': '*',},
      }).then(res => res.json())
      .then(
        (res) => {
          this.setState({devices: JSON.parse(res.data).objects})
        },(error) => {
          console.log(error)
        }
      );
  }

  // Validate user content
  handleSubmit = event => {
    event.preventDefault();

    let isValid = findDeviceId(this.state.user.device, this.state.devices).length != 0;
    
    if(isValid){
      this.props.onDeviceSubmit(this.state.user);
    } else {
      this.setState({errorMsg: "Invalid deviceID, please contact Glimpse member for assistance." })
    }
  }

  handleChangeFor = (propertyName) => (event) => {
    let { user } = this.state;
    user = {
      ...user,
      [propertyName]:event.target.value
    };
    this.setState({user});
  }

  render() {
    console.log(this.state.currUsers);
    const { name, email, device } = this.state.user;
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
                <p className="signInTitle"> Sign In</p>
                <div className="formGroup">
                    <TextField value={device} title="Device Id" onChange={this.handleChangeFor("device")}/>
                </div>          
                <button type="submit" onClick={this.handleSubmit} className="btnLogin">Select</button>
                {this.state.errorMsg !== ''
                ? <p className="errorMsg">
                    {this.state.errorMsg}
                  </p>
                : null }
                <p className="signUpLink">
                  Have a question? <a href="">email us</a>
                </p>
            </form>
            
        </div>

      </div>
    ); 
    // <TextField value={name} title="User Name" onChange={this.handleChangeFor("name")}/>
    // <TextField value={email} title="Email" onChange={this.handleChangeFor("email")}/>             
  }
}

function mapStateToProps(state){
  return {
      //tags:state.tags
      tags: ["All Images"]
  }
}

export default  connect(mapStateToProps)(Login);
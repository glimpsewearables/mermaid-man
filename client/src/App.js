import React, { Component } from 'react';

// For js testing
// import { runTest } from "./test"

import DeviceSelect from "./components/Login/DeviceSelect"
import Main from "./components/Main"
import './App.css';

// google analytics
import ReactGA from 'react-ga';
ReactGA.initialize('UA-130211300-1');
ReactGA.pageview(window.location.pathname + window.location.search);


export default class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      login: false,
      //login: true,
      error: null
    }

    this.onOpenChange = this.onOpenChange.bind(this);
    this.onDeviceSubmit = this.onDeviceSubmit.bind(this);
    this.onLogout = this.onLogout.bind(this)
    this.login = this.login.bind(this);
  }

  onOpenChange(){
    this.setState({open: !this.state.open})
  }

  onDeviceSubmit(user){
    sessionStorage.setItem("device", user.device);
    this.login(user);
  }

  onLogout(){
      sessionStorage.clear();
      this.setState({login: false})
  }

  login(user){
    /* var params = { "last_name": "LouisTest 11.29.18", "password": "LouisTest 11.29.18", "phone": "LouisTest 11.29.18" }
    fetch('/api/user/', {
            method: 'POST',
            headers: {'Content-Type':'application/json','Access-Control-Allow-Origin': '*',},
            body: JSON.stringify({...params,
                                      "email": user.email,
                                      "first_name": user.email}),
      }).then( () => {
        sessionStorage.setItem("login", true)
        this.setState({login: true, setDevice: user.device})
      }).catch((error) => {
          console.log(error)
        }
      ); */ 
  }

  render() {
    let { login, error } = this.state;
    return (
      <div className="App">
        { !login 
        ?
          <DeviceSelect onDeviceSubmit={this.onDeviceSubmit}
            error={error}
          />
        : <Main 
            onLogout={this.onLogout}
          />
        }
      </div>
    );
  }
}
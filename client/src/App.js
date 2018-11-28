import React, { Component } from 'react';

import './App.css';


import DeviceSelect from "./components/Login/DeviceSelect"
import Main from "./components/Main"
import { runTest } from "./test"

export default class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      login: sessionStorage.getItem("login"),
    }

    this.onOpenChange = this.onOpenChange.bind(this);
    this.onDeviceSubmit = this.onDeviceSubmit.bind(this);
    this.onLogout = this.onLogout.bind(this)
  }

  onOpenChange(){
    this.setState({open: !this.state.open})
  }

  onDeviceSubmit(){
    sessionStorage.setItem("login", true)
    this.setState({login : !this.state.login})
  }

  onLogout(){
      sessionStorage.clear();
      this.setState({login: false})
  }

  render() {
    return (
      <div className="App">
        { !this.state.login 
        ?
          <DeviceSelect onDeviceSubmit={this.onDeviceSubmit}/>
        : <Main 
            onLogout={this.onLogout}
          />
        }
      </div>
    );
  }
}
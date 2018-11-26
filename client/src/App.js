import React, { Component } from 'react';

import './App.css';


import DeviceSelect from "./components/Login/DeviceSelect"
import Main from "./components/Main"


export default class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      login: true,
    }

    this.onOpenChange = this.onOpenChange.bind(this);
    this.onDeviceSelect = this.onDeviceSelect.bind(this);
  }

  onOpenChange(){
    this.setState({open: !this.state.open})
  }

  onDeviceSelect(){
    this.setState({login : !this.state.login})
  }

  render() {
    return (
      <div className="App">
        { !this.state.login 
        ?
          <DeviceSelect onDeviceSelect={this.onDeviceSelect}/>
        : <Main />
        }
      </div>
    );
  }
}
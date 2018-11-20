import React, { Component } from 'react';

import './css/App.css';
import './css/Menu.css';
import './css/Header.css';
import './css/HeaderNav.css';
import './css/Gallery.css';

import Events from "./components/Events/Events"
import EventPage from "./components/EventPage/EventPage"

import DeviceSelect from "./components/Login/DeviceSelect"
import HeaderNav from "./components/HeaderNav"


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      open: true,
      events: false,
      login: false,
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
        : <div> 
          <HeaderNav 
              open={this.state.open}
              onOpenChange={this.onOpenChange}
          />
          { this.state.event
            ? <Events />
            : <EventPage />
          }
          </div>
        }
      </div>
    );
  }
}

export default App;

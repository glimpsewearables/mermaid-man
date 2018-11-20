import React, { Component } from 'react';

import './css/App.css';
import './css/Menu.css';
import './css/Header.css';
import './css/HeaderNav.css';
import './css/Gallery.css';

import Events from "./components/Events/Events"
import EventPage from "./components/EventPage/EventPage"

import Login from "./components/Login/Login"
import HeaderNav from "./components/HeaderNav"


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      open: true,
      events: false,
      login: true,
    }

    this.onOpenChange = this.onOpenChange.bind(this);
  }

  onOpenChange(){
    this.setState({open: !this.state.open})
  }

  render() {
    return (
      <div className="App">
        { !this.state.login 
        ?
          <Login />
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

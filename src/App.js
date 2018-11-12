import React, { Component } from 'react';

import './css/App.css';
import './css/Menu.css';
import './css/Header.css';
import './css/HeaderNav.css';
import './css/Gallery.css';

import Login from "./components/Login/Login";

import Sidebar from './components/Sidebar'
import HeaderNav from './components/HeaderNav';
import GlimpseGallery from "./components/GlimpseGallery";
import GlimpseGallery2 from "./components/GlimpseGallery2";

import SliderWrapper1 from "./components/SliderWrapper1";
import SliderWrapper2 from "./components/SliderWrapper2";

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      open: true,
      event: false,
      login: false,
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
        { this.state.event
          ?<div> 
              <GlimpseGallery2 color="#222536" title={"Bumpershoot"} date={"08/31/18"} />
              <GlimpseGallery2 color="#222536" title={"Lollapalooza"} date={"07/12/18"} /> 
            </div>
            : <div>
              <HeaderNav 
                open={this.state.open}
                onOpenChange={this.onOpenChange}
              />
            <div className="contentWrapper">
              <div className="eventTitle">
                <h2>Bumpershoot</h2>
                <h3>10/18/14</h3>
              </div>
              <Sidebar 
                open={this.state.open}
                onOpenChange={this.onOpenChange}
              />
              <SliderWrapper1 />
              <GlimpseGallery color="#222536" title={"Highlights"} date={"10/12/18"} />
              <GlimpseGallery color="#FE7879" title={"Photos taken with Glimpse"} />
            </div>
          </div>
          }
          </div>
        }
      </div>
    );
  }
}

export default App;

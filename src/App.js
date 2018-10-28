import React, { Component } from 'react';
import './css/App.css';
import './css/Menu.css';
import './css/Header.css';
import './css/HeaderNav.css';
import './css/Gallery.css';


import Header from './components/Header';
import Sidebar from './components/Sidebar'
import ImageFeed from './components/ImageFeed';
import HeaderNav from './components/HeaderNav';
import GlimpseGallery from "./components/GlimpseGallery";

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      open: true
    }

    this.onOpenChange = this.onOpenChange.bind(this);
  }

  onOpenChange(){
    this.setState({open: !this.state.open})
  }

  render() {
    return (
      <div className="App">
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
          
            <GlimpseGallery color="#222536" title={"Highlights"} date={"10/12/18"} />
            <GlimpseGallery color="#FE7879" title={"Photos from Glimpse"} />
          </div>
      </div>
    );
  }
}

export default App;

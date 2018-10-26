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
            <Sidebar 
              open={this.state.open}
              onOpenChange={this.onOpenChange}
            />
          
            <Header />
            <GlimpseGallery />
          </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './css/App.css';
import './css/Menu.css';
import './css/Header.css';
import './css/HeaderNav.css';
import './css/Gallery.css';


import Header from './components/Header';
import Sidebar from './components/Sidebar'
import ImageFeed from './components/ImageFeed';
import HeaderNav from './components/HeaderNav'

class App extends Component {
  render() {
    return (
      <div className="App">
          <HeaderNav />
          <div className="contentWrapper">
            {false 
            ? <Sidebar />
            : null}
            <Header />
            <ImageFeed />
          </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './css/App.css';
import './css/Menu.css';
import './css/Header.css';
import './css/Gallery.css';

import Header from './components/Header';
import Sidebar from './components/Sidebar'
import ImageFeed from './components/ImageFeed';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Sidebar />
          <Header />
          <ImageFeed />
      </div>
    );
  }
}

export default App;

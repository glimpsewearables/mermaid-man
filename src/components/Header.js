import React, { Component } from 'react';
import bell from '../assets/bell.svg'


class Header extends Component {
  constructor(props){
    super(props);

    this.state = {
      isNotified:false,
      isViewed:false
    }
    this.onNotificationClick = this.onNotificationClick.bind(this);
  }

  onNotificationClick(){
      this.setState({isNotified: !this.state.isNotified, isViewed: true})
  }

  render() {
    return (
      <div className="Header">
        <div className="header">
          <h1 className="title">Event Title Name</h1>
          <ul className="header-tabs">
            <li>Global</li>
            <li>Friends</li>
            <li>Personal</li>
          </ul>
        
        <div className="header notification-wrapper-position">
          <div className="notification-wrapper" 
            onClick={this.onNotificationClick}>
            <img src={bell} />
            { !this.state.isViewed 
            ? <div className="notificationNumber"> 2 </div>
            : null }
          </div>
        </div>
          { this.state.isNotified 
          ? <div className="notificationBox">
              {  /*todo add a loop that populates this box. Current decision is all  notifications (for simplicity) */}
              <div className="notificationItem">This is a notification about something happening at the festival.</div>
              <div className="notificationItem">This is a notification about something happening at the festival, later I will add a time stamp and other stuff.</div>
              <div className="notificationItem">This is a notification about something happening at the festival later I will add a time stamp and other stuff.</div>
           </div>
          : null  }
      </div>
      </div>
    );
  }
}

export default Header;

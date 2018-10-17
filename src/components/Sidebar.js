import React, { Component } from 'react';

import { slide as Menu } from 'react-burger-menu'
import HamburgerMenu from 'react-hamburger-menu';
import Account from "./Account";

import settingsIcon from "../assets/settings.svg";

class Sidebar extends Component {
  constructor(props){
    super(props);
    this.state = {
        open: true
    }

    this.handleClick = this.handleClick.bind(this);
    this.showSettings = this.showSettings.bind(this);
  }

  handleClick() {
    this.setState({
        open: !this.state.open
    });
  }

  showSettings(e){
    alert();
  }

  render() {
    let { open } = this.state;
    return (
      <div className={open ? "Sidebar " : "Sidebar SidebarOpened SidebarOpenColor" }>
        {/* Will render only on mobile */}
        <div className="hamburgerBttn">
          <HamburgerMenu
            isOpen={!open}
            menuClicked={this.handleClick.bind(this)}
            width={18}
            height={15}
            strokeWidth={2}
            rotate={0}
            color='black'
            borderRadius={0}
            animationDuration={0.6}
          />
        </div>
          <Account />
          <div className="sidebarContentWrapper">
            <ul className="sidebarEvents">
               {/* each of these will update state  to filter for that event. yo.*/}
              <li href="/">Event #1</li> 
              <li href="/">Event #2</li>
              <li href="/">Event #3</li>
            </ul>
            <div className="settings"
             onClick={this.showSettings}>
              <img src={settingsIcon}/>
            </div>
          </div>
      </div>
    );
  }
}

export default Sidebar;

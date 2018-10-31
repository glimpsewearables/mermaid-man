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
    let { open } = this.props;
    return (
      <div>
        <div className={open ? "Sidebar " : "Sidebar SidebarOpened SidebarOpenColor" }>
          {/* Will render only on mobile */}
            <Account />
            <div className="sidebarContentWrapper">
              <div className="hamburgerBttn">
                  <HamburgerMenu
                    isOpen={!open}
                    menuClicked={this.props.onOpenChange}
                    width={16}
                    height={13}
                    strokeWidth={2}
                    rotate={0}
                    color='black'
                    borderRadius={0}
                    animationDuration={0}
                    animation={false}
                  />
              </div>
              <ul className="sidebarEvents">
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
        {!open ?
          <div className="overlay">
          </div>
        : null}
      </div>
    );
  }
}

export default Sidebar;

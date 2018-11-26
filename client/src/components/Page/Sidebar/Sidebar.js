import React, { Component } from 'react';

import { slide as Menu } from 'react-burger-menu'
import HamburgerMenu from 'react-hamburger-menu';
import Account from "../Account";
import './Sidebar.css';

import settingsIcon from "../../../assets/settings.svg";

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
    console.log("this should handle open")
    this.setState({ open: !this.state.open });
  }

  showSettings(e){
    alert();
  }

  render() {
    let { onOpenChange } = this.props;
    let { open } = this.state;
    return (
      <div>
        <div className={open ? "Sidebar " : "Sidebar SidebarOpened SidebarOpenColor" }>
            {/* Will render only on mobile */}
            <div className="sidebarContentWrapper">
              <div className="hamburgerBttn" onClick={this.handleClick}>
                  <HamburgerMenu
                    isOpen={!open}
                    menuClicked={this.handleClick}
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

              <div className="settings"
              onClick={this.showSettings}>
                <img src={settingsIcon}/>
              </div>
            </div>
        </div>
        {! open ?
          <div className="overlay" onClick={onOpenChange}>
          </div>
        : null}
      </div>
    );
  }
}

export default Sidebar;

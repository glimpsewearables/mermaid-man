import React, { Component } from 'react'
import HamburgerMenu from 'react-hamburger-menu';

export default class HeaderNav extends Component {
  render() {
    return (
      <div className="headerNav">
        <div className="hamburger">
          <HamburgerMenu
            width={18}
            height={15}
            strokeWidth={2}
            rotate={0}
            color='#707070'
            borderRadius={0}
            animationDuration={0.6}
          />
        </div>
        <div className="logoTitle">
                GlimpseCam
        </div>
        
      </div>
    )
  }
}

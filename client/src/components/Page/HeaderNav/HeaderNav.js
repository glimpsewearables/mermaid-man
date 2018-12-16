import React, { Component } from 'react'
import HamburgerMenu from 'react-hamburger-menu'
import './HeaderNav.css'
import { userLogout } from "../../../ReduxActions/UserActions"
import { connect } from "react-redux"

class HeaderNav extends Component {
  constructor(){
    super();

    this.onLogout = this.onLogout.bind(this);
  }
  onLogout(){
    sessionStorage.clear();
    this.props.userLogout(true); 
  }

  render() {
    return (
      <div className="headerNav">
        <div className="logoTitle">
                GlimpseCam
        </div>
        <div className="logout" onClick={this.onLogout}>
          Logout
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    //
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    userLogout: (logout) => dispatch(userLogout(logout))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderNav)


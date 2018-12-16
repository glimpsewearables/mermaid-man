import React, { Component } from 'react'

import HeaderNav from "./Page/HeaderNav/HeaderNav"
import Sidebar from "./Page/Sidebar/Sidebar"
import { connect } from "react-redux"
import { withRouter, Redirect } from 'react-router'

class Main extends Component {
    constructor(props){
        super(props);

        this.state = {
            open: false,
            events: sessionStorage.getItem("events") || false,
        }

        this.onOpenChange = this.onOpenChange.bind(this);
    }

    onOpenChange(){
        this.setState({open: !this.state.open});
    }

    render() {
        let { open, onOpenChange } = this.state;
        if(this.props.devices === undefined || this.props.devices.length === 0){
            return ( <Redirect to="/login"/>)
        }
        return (
            <div> 
                <HeaderNav 
                    open={open}
                    onOpenChange={onOpenChange}
                    onLogout={this.props.onLogout}
                />
                <Sidebar open={open}
                            onOpenChange={onOpenChange}/>
            </div>
        )
    }
}

const mapStateToProps = (store) =>{
    return {
      events : store.sendEvents,
      devices : store.sendDevices.devices
    }
}

Main = withRouter(Main)
export default connect(mapStateToProps)(Main);
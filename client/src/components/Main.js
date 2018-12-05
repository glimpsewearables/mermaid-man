import React, { Component } from 'react'

import HeaderNav from "./Page/HeaderNav/HeaderNav"
import Sidebar from "./Page/Sidebar/Sidebar"


export default class Main extends Component {
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

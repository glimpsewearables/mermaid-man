import React, { Component } from 'react'

import Events from "./Events/Events"
import EventPage from "./EventPage/EventPage"
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
        this.onEventSelect = this.onEventSelect.bind(this);
        this.onHome = this.onHome.bind(this);
    }

    onEventSelect(id) {
        sessionStorage.setItem("events", !this.state.events);
        sessionStorage.setItem("event", id);
        this.setState({events: !this.state.events});
        this.setState({event: id});
    }

    onHome(){
        sessionStorage.setItem("events", false);
        this.setState({events: false});
    }

    onOpenChange() {
        this.setState({open: !this.state.open});
    }

    render() {
        let { open, onOpenChange, events } = this.state;
        return (
        <div> 
            <HeaderNav 
                open={open}
                onOpenChange={onOpenChange}
                onHome={this.onHome}
                onLogout={this.props.onLogout}
            />
            <Sidebar open={open}
                     onOpenChange={onOpenChange}/>
            { events
              ? <EventPage />
              : <Events onEventSelect={this.onEventSelect}/>
            }
         </div>
        )
    }
}

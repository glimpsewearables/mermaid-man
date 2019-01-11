
import React, { Component } from 'react'

export default class SidebarEvent extends Component {
    constructor(props){
        super(props)

        this.eventClick = this.eventClick.bind(this)
    }

    eventClick(){
        this.props.onClick(this.props.id)
    }

    render() {
        return (
            <li onClick={this.eventClick}>
                {this.props.name}
            </li>
        )
    }
}



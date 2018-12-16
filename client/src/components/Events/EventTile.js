import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class EventTileWithRouter extends Component {
    constructor(props){
        super(props)

        this.createBackground = this.createBackground.bind(this)
        this.handleClick = this.handleClick.bind(this);
    }
    
    createBackground = (url) =>{
        return  ({ 
                    backgroundImage: ['url(',url,  ')'].join(''),
                    backgroundSize: "cover",
                })
    }

    handleClick(){
        this.props.onClick(this.props.urlName);
    }

    render() {
        const { imgUrl, title, date, place } = this.props;
        const imgStyle = this.createBackground(imgUrl);
        return (
            <div className="eventContainer" onClick={this.handleClick}>
                <div className="eventTile" style={imgStyle} >
                </div>
                <div className="eventTileTitle">
                <h2>{ title }</h2>
                    <div className="eventTitleDetails">
                        <h3>{ date }</h3>
                        <span className="dot"></span>

                        <h3> { place }</h3>
                    </div>
                </div>
            </div>
        )
    }
}

const EventTile = withRouter(EventTileWithRouter);

export default EventTile;

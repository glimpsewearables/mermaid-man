import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class EventTileWithRouter extends Component {
    constructor(props){
        super(props)

        this.createBackground = this.createBackground.bind(this)
        this.onClick = this.onClick.bind(this)
    }
    createBackground = (url) =>{
        return  ({ 
                    backgroundImage: ['url(',url,  ')'].join(''),
                    backgroundSize: "cover",
                })
    }

    onClick(){
        let { history } = this.props;
        history.push(this.props.loc);
    }

    render() {
        const { imgUrl, onClick, title, date, place } = this.props;
        const imgStyle = this.createBackground(imgUrl);
        console.log(imgUrl, title);
        return (
            <div className="eventContainer" onClick={this.onClick}>
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

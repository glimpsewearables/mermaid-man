import React, { Component } from 'react'

export default class Footer extends Component {
    constructor(props){
        super(props)
        this.submit = this.submit.bind(this);
    }

    submit(){
        this.inputTitle.value = "";    
    }
    render() {
        return (
            <div className="Footer" style={this.props.backgroundStyle}>
                <div className="emailContainer">
                    <p className="emailTagline"> Stay up to date with Glimpse Updates.</p>
                        <input
                            ref={el => this.inputTitle = el}
                            type="email"
                            placeholder="Email" 
                            className="emailInput"
                        />
                        <button className="emailButton" onClick={this.submit}>Subscribe</button>
                </div>
            </div>
        )
    }
}

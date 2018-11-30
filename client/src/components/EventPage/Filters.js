import React, { Component } from 'react'
let filters = [{filter: "Global", active:false}, {filter: "Personal", active:true},];

export default class Filters extends Component {
  constructor(props){
    super(props);

    this.state = {
      active: null,
    }

    this.makeActive = this.makeAcgtive.bind(this)
  }

  makeActive(){

  }

  render() {
    return (
      <div className="Filters">
        {filters.map( (el, index) =>{
          let style;
          if(el.active){
            style={backgroundColor: "yellow"}
          } else{
            style={backgroundColor:"grey"}
          }
          return( <div type="button" className="filter" onClick={() => this.props.onClick(el)} name={el} key={index}> {el}</div> )
        })}
      </div>
    )
  }
}

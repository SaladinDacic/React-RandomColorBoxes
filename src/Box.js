import React, { Component } from 'react'
import "./Box.css";

class Box extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    static defaultProps = {
        color: "red"
    }
    handleClick(p){
        this.props.changeOne(this.props.k);
    }
    render(){
     /*  */
        return(
            <button onClick={this.handleClick} className={`Box`} style={{"backgroundColor": this.props.color}}></button>
        )
    }
}

export default Box;
import React, { Component } from 'react';
import Box from "./Box";
import "./BoxList.css";
import {randomizeArr} from "./helpers";

class BoxList extends React.Component{
    static defaultProps = {
        arr : [
                "#f54242", "#f57842", "#f5b642", "#f5e942", "#c8f542", "#81f542", "#42f54e", "#42f599", "#42f5d4", "#42b3f5",
                "#4266f5", "#5742f5", "#8a42f5", "#d142f5", "#f542e9", "#f542a4", "#f54269", "#f54244", "#912626", "#914626",
                "#916426", "#917c26", "#8a9126", "#6d9126", "#489126", "#26912b", "#26915d", "#268c91", "#264391", "#91268a"
              ]
    }
    constructor(props){
        super(props);
        this.state={
            color: "green",
            childKey: null,
            colorArr : Array.from({length: this.props.arr.length})
        }
        this.handleClick = this.handleClick.bind(this);
        this.changeOne = this.changeOne.bind(this);
    }
    handleClick(e){
        let arr = randomizeArr(this.props.arr)
        this.setState({colorArr:arr})
    }
    changeOne(p){
        let rand = Math.floor(Math.random()*this.props.arr.length);
        this.setState({color: this.props.arr[rand], childKey:p})
        console.log(p)
    }
    render(){
        let colorBox = this.state.colorArr.map((val,index)=>{
            return <Box changeOne={this.changeOne} key={index} k={index} color={index===this.state.childKey?this.state.color:val}/>
        })
        return(
            <div className="BoxList">
                <div className="BoxList-allColors">
                {colorBox}
                </div>
                <button className="BoxList-button" onClick={this.handleClick} >click me</button>
            </div>
        )
    }
}

export default BoxList;
import React, { Component } from 'react';
import './subtitle.css';

class SubTitle extends Component{
    constructor(props){
        super(props)
        this.state ={
            "subtitle":this.props.subtitle|| "书籍列表"
        }
    }
    render(){
        return (
            <div className= "subtitle">
                  <h2 >{this.state.subtitle}</h2>
            </div>
        )
    }
}

export default SubTitle;
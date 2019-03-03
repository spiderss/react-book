 import React, { Component } from 'react';
 import './head.css';
class Head extends Component{
  constructor(props){
    super(props);
      this.state ={
        "nav":[
            {"navName":"首页"}
        ]
    }
  };
    render() {       
        return (
          <div className="header">
           <ul>
              {this.state.nav.map((item,index)=>{
                return (<li key={index}>{item.navName}</li>);
              })}
           </ul>
           
          </div>
        );
      }
}
export default Head;
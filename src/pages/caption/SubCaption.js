import React, { Component } from 'react'; 

class  SubCaption extends Component{
    constructor(props){
        super(props)
        this.state={
            "captionList":this.props.captionList || [],
            "parentCaptionId":this.props.parentCaptionId
        }
    }
    render(){
        console.log(this.state.captionList.length>0)
        if(this.state.captionList.length<=0){
            return("")
        }
        return (
            <dl key={this.state.parentCaptionId}>
            {this.state.captionList.map((citem,cindex)=>{
             return (
              <dd key={this.state.parentCaptionId-cindex}><a href={"/bookDetail/"+citem.id}>{citem.captionName}</a></dd>
                  )
            }) }
            </dl> 
        )
      
    }
}

export default SubCaption;
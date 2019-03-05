import React, { Component } from 'react'; 
import './detail.css'

import Treader from '../common/treader/treader'
class Detail extends Component{
    constructor(props){
        super(props);        
        this.state = {
            "captionInfo":{
                "captionId":"",
                "bookId"   :"",
                "captionName":"千金药房",              
                "content":' 无内容'
            
            },
            "bookCaptionList":[]
        }
    };
    componentWillMount(){
        this.getCaptionList()
    };
    getCaptionList(){
         let url = "http://localhost:8000/caption/"+this.props.match.params.captionId
         console.log("get bookUrl "+url)
         fetch(url).then(response=>response.json()).then(data=>{
             console.log(data)
            this.setState({
                captionInfo:data
            })
         })
    }
    render(){
        console.log(444)
        return (
            <div className="main-content">              
                <div dangerouslySetInnerHTML={{__html:this.state.captionInfo.content}}></div>
            </div>
        )
    }
}


export default Detail;
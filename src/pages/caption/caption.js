import React, { Component } from 'react'; 
import './caption.css'

import SubTitle from '../common/subtitle/subtitle'
import SubCaption from './SubCaption';



class Caption extends Component{
    constructor(props){
        super(props);
        this.state = {
            "bookInfo":{
                "bookId":this.props.match.params.id,
                "bookName":"千金药房",
                "bookThumb":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551450406738&di=59a2be8e5fb3d68a34ea3ef075413944&imgtype=0&src=http%3A%2F%2Fpic3.58cdn.com.cn%2Fzhuanzh%2Fn_v2b636561f0fc242bd92c5e76a95ab95e6.jpg%3Fw%3D750%26h%3D0",
                "author" :"孙思邈",
                "description":' 《千金要方》又称《备急千金要方》、《千金方》，是中国古代中医学经典著作之一，作者孙思邈，共30卷，是综合性临床医著，被誉为中国最早的临床百科全书。<br/>唐朝孙思邈所著，约成书于永徽三年（652年）。该书集唐代以前诊治经验之大成，对后世医家影响极大。《千金要方》总结了唐代以前医学成就，书中首篇所列的《大医精诚》、《大医习业》，是中医学伦理学的基础；其妇、儿科专卷的论述，奠定了宋代妇、儿科独立的基础；其治内科病提倡以\"五脏六腑为纲，寒热虚实为目\"，并开创了脏腑分类方剂的先河；其中将飞尸鬼疰（类似肺结核病）归入肺脏证治，提出霍乱因饮食而起，以及对附骨疽（骨关节结核）好发部位的描述、消渴（糖尿病）与痈疽关系的记载，均显示了相当高的认识水平；针灸孔穴主治的论述，为针灸治疗提供了准绳，阿是穴的选用、“同身寸”的提倡，对针灸取穴的准确性颇有帮助。因此，《千金要方》素为后世医学家所重视。《千金要方》还流传至国外，产生了一定影响。'
            
            },
            "bookCaptionList":[]
        }
    };
    componentWillMount(){
        this.getCaptionList()
    };
    getCaptionList(){
         let url = "http://localhost:8000/detail/"+this.props.match.params.id
         console.log("get bookUrl "+url)
         fetch(url).then(response=>response.json()).then(data=>{
            this.setState({
                bookCaptionList:data
            })
         })
    }
    render(){
        return (
            <div className="main-content">
                <div className="caption-desc">
                    <img src={this.state.bookInfo.bookThumb}/>
                    <div className="bookInfo">
                        {/* <p><label>作者：</label>{this.state.bookInfo.author}</p> */}
                        <p dangerouslySetInnerHTML={{__html:this.state.bookInfo.description}}></p>
                    </div>
                </div>
                <SubTitle subtitle="章节"/>
                
                  <div className="caption-detail">
                     {this.state.bookCaptionList.map((item,index)=>{
                           return ( 
                               <div key={index}>
                                    <h2 ><a href={"/bookDetail/"+item.id}>{item.captionName}</a></h2>
                                    <SubCaption captionList={item.children} parentCaptionId={item.id} bookId={this.state.bookInfo.bookId} />
                               </div>                         
                           )                
                     })} 
                  </div>
               
            </div>
        )
    }
}


export default Caption;
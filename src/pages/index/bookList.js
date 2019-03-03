import React, { Component } from 'react';
import './bookList.css';


class BookList extends Component{
    constructor(props){
        super(props);
        this.state ={
            "bookList":[]
        }
        
    };
    componentWillMount() {
        console.log("2渲染")   
        this.getBooKLIst();  
       
    };
    componentDidMount() {
        console.log(this.state.bookList, 199)   
  
       
    };
    getBooKLIst =()=> {
        //let self=this
        fetch("http://localhost:8000").then(response => response.json())
        .then(data => {
          // data就是我们请求的repos
          console.log(this, 93)
          this.setState({
              bookList:data.data
          })
        });
        //console.log(this.state.bookList)
    };
    render(){   
        console.log("1渲染")  
        let bookList = this.state.bookList;
        console.log(bookList, 33)   
        return (
           <div className="book">
               
               {this.state.bookList.map((item,index)=>{
                return (
                    <div className="bookItem" key={index}>
                          <a href=''>
                            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551450406738&di=59a2be8e5fb3d68a34ea3ef075413944&imgtype=0&src=http%3A%2F%2Fpic3.58cdn.com.cn%2Fzhuanzh%2Fn_v2b636561f0fc242bd92c5e76a95ab95e6.jpg%3Fw%3D750%26h%3D0"  width="220px"/>
                            <p className="bookName"> {item.bookName}</p>
                          </a>
                    </div>
                    // <li >{item.bookName}</li>
                );
              })}
           </div>
        )
    };
}
export default BookList
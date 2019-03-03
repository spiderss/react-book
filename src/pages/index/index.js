import React, { Component } from 'react';
import './index.css';
import SubTitle from '../common/subtitle/subtitle'
import BookList from './bookList'


class Index extends Component{

    render(){
        return (
           <div id= "bookList">
                <SubTitle />
                <BookList />
           </div>
        )
    };
}
export default Index
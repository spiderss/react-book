import React, { Component } from 'react';
import {Link,Route,BrowserRouter as Router} from 'react-router-dom'
// import logo from './logo.svg';
import './App.css';
import Head from './pages/common/header/head'
import Footer from './pages/common/footer/footer'

import Index from './pages/index/index'
import Caption from './pages/caption/caption'
import Detail from './pages/detail/detail';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">          
        <Head />        
        <Route path='/' exact  component={Index}></Route>   
        <Route path='/book/caption/:id' component={Caption}></Route>   
        <Route path='/bookDetail/:captionId' component={Detail}></Route>   
        <Footer />        
      </div>
      </Router>
    );
  }
}

export default App;

import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Head from './pages/common/header/head'
import Index from './pages/index/index'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Head />
        <Index />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import {  Link, BrowserRouter as Router } from 'react-router-dom';
import './App.scss';


class App extends Component {



  render() {
    return (
      <div className="App">
        Welcome to App
        <br/>
        <Link to="/catalog">Catalog</Link>
        <br/>
        <Link to="/language/pt">Catalog with parameter PT</Link>      
        <br/>
        <Link to="/language">Language</Link>      
        
      </div>
    );
  }
}

export default App;

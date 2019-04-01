import React, { Component } from 'react';
import './App.scss';

/* Import Screens */
import Catalog from './screens/Catalog/Catalog';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Catalog/> 
      </div>
    );
  }
}

export default App;

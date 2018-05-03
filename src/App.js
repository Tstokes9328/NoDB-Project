import React, { Component } from 'react';

import List from './Components/List';
import Title from './Components/Title';

import './App.css';

class App extends Component {

  render() {
    return (
        <div className="App">
          <Title />
          <List />
        </div>
    );
  } 
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Display from './Display';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>My react app!</h1>
     <h3>This is my first react app</h3>
     <Display name ="Diwanshu" age = "21" month = "November" />
     <Display name ="Gurri" age = "21" month = "June" />

      </div>
    );
  }
}

export default App;

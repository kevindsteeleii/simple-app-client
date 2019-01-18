import React, { Component } from 'react';
import './App.css';
import ENV from './secret';

class App extends Component {

  state = {
    items: []
  }

  componentDidMount() {

  }

  render() {
    console.log(ENV.BASEURL)
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;

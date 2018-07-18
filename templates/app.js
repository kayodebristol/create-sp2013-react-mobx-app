import React, { Component } from 'react';
import { observer } from 'mobx-react'; 
import styled from 'styled-components';
import '../styles/app.css'
const App = observer(class App extends Component {
    render() {
      return (
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/containers/app.js</code> and save to reload.
          </p>
        </div>
      );
    }
  })
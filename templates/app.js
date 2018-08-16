module.exports = `import React, { Component } from 'react';
import { observer } from 'mobx-react'; 
import styled from 'styled-components';
import '../styles/app.css';
import logo from '../assets/logo.svg';


export const App = observer(class App extends Component {
    render() {
      let store = this.props.store; 
      return (
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React with Mobx</h2>
            <h3>You're connected to SharePoint:</h3>
            <h3>{store.spSiteInfo} </h3>
         
          </div>
          <p className="App-intro">
            To get started, edit <code>./src/containers/app.js</code> and save to reload.
          </p>
        </div>
      );
    }
  })
`
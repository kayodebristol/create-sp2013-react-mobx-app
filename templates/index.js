module.exports = `import './models/babelPolyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './containers/app';
import './models/uuid';
import store from './models/store';
import Logger from 'js-logger'; 

Logger.debug(store.settings.appId); 
const guid = Math.uuid(8); 
Logger.debug(guid); 
var reactRootDiv = document.createElement('div'); 
var appDiv = document.getElementById(store.settings.appId);
appDiv.appendChild(reactRootDiv);
reactRootDiv.setAttribute('id', guid); 
Logger.debug(reactRootDiv); 

ReactDOM.render(
    <App store={store}/>
,document.getElementById(guid));



`
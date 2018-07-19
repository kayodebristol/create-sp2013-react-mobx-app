module.exports = `import './model/babelPolyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './container/app';
import './model/uuid';
import store from './model/store';
import  'datejs'; 
import {sp} from '@pnp/sp';
import package from './package.json'; 

sp.setup(
    {
        sp: 
            { headers: 
                { "Accept": "application/json; odata=verbose" } 
            }
    });

const guid = Math.uuid(8); 
var reactRoot = document.createElement('div'); 
/*eslint-disable*/
var container = document.getElementById('sp-react-app');
/*eslint-enable*/
appDiv.appendChild(reactRootDiv);
reactRoot.setAttribute('id', guid); 

ReactDOM.render(
    <div className={package.name}>
        <App store={store}/>
    </div>, document.getElementById(guid)
);

`
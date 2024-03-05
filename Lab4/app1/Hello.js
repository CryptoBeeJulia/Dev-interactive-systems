
/*

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';

ReactDOM.createRoot(
    document.querySelector('#root')
    ).render(<App/>) 
*/

'use strict';

class Hello extends React.Component { 
    constructor(props) { 
        super(props); 
        this.state = { personName:'World' };
    }
    render() { 
        return React.createElement('h1', null, 'Hello, ' + this.state.personName); 
    }
}
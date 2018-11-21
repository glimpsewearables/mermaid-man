import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';

import App from './App';
import { Provider } from 'react-redux'

import store from "./store/index";

import registerServiceWorker from './registerServiceWorker';

window.store = store;


ReactDOM.render(<Provider store={store}>
                    <App />
                </Provider>, document.getElementById('root'));
registerServiceWorker();

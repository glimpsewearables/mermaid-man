import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import App from './App';
import Home from './components/Home/Home'
import Main from './components/Main'
import Events from './components/Events/Events'
import EventPage from './components/EventPage/EventPage'
import DeviceSelect from './components/Login/DeviceSelect'

import { Provider } from 'react-redux'

import store from "./store/index";

import registerServiceWorker from './registerServiceWorker';

window.store = store;


ReactDOM.render(
                <Provider store={store}>
                    <Router>
                        <div>
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route path="/" component={Main} />
                            </Switch>
                            <Route path="/login" component={DeviceSelect} />
                            
                            <Switch>
                                <Route path="/events" component={Events}/>
                                <Route path="/:eventpage" component={EventPage}/>
                            </Switch>
                        </div>
                    </Router>
                </Provider>
              , document.getElementById('root'));
registerServiceWorker();

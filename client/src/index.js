import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route, Switch, withRouter} from "react-router-dom";
import { Provider } from 'react-redux'
import configureStore from "./store/configureStore";

import './index.css';
import './App.css';

import registerServiceWorker from './registerServiceWorker';
import Home from './components/Home/Home'
import Main from './components/Main'
import Events from './components/Events/Events'
import EventPage from './components/EventPage/EventPage'
import DeviceSelect from './components/Login/DeviceSelect'

import ReactGA from 'react-ga';
ReactGA.initialize('UA-130211300-1');
ReactGA.pageview(window.location.pathname + window.location.search);

let store = configureStore();
window.s = store;

ReactDOM.render(
    <Provider store={store}>
        <Router >
                <div>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/login" component={DeviceSelect}/>
                        <Route path="/" component={Main} />
                    </Switch>
                    <Switch>
                        <Route exact path="/events" component={Events}/>
                        <Route path="/events/:eventpage" component={EventPage}/>
                    </Switch>
                </div>
            </Router>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();

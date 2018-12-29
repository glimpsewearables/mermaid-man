import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter} from "react-router-dom";

// For js testing
// import { runTest } from "./test"

import Home from './components/Home/Home'
import Main from './components/Main'
import Events from './components/Events/Events'
import EventPage from './components/EventPage/EventPage'
import DeviceSelect from './components/Login/DeviceSelect'

import './App.css';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      //login: sessionStorage.getItem("login") || false,
      login: false,
      error: null,
    }

    this.onOpenChange = this.onOpenChange.bind(this);
    this.onDeviceSubmit = this.onDeviceSubmit.bind(this);
  }

  onOpenChange(){
    this.setState({open: !this.state.open})
  }

  onDeviceSubmit(user){
    sessionStorage.setItem("device", user.device);
    this.login(user);
  }

  render() {
    let { login, error } = this.state;
    return (
      <div className="App">
            {/* one option is to render the App component as container. 
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/login" component={DeviceSelect}/>
                        <Route path="/" component={Main} />
                    </Switch>
                    <Switch>
                        <Route exact path="/wine" component={Events}/>
                        <Route path="wine/:eventpage" component={EventPage}/>
                    </Switch>
                </div>
            </Router> */}
      </div>
    );
  }
}

const DeviceLogin = withRouter(App);
export default App;
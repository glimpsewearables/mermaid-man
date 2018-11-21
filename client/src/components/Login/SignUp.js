import React, { Component } from "react";
import "./Login.css";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };

    this.onClick = this.onClick.bind(this);
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }
  
  onClick(event) {
    event.preventDefault();
    console.log("log");
    return
  }

  render() {
    return (
      <div className="SignUp">
        
        <div className="signUpWrapper">
            <h1 className="logoTitleLogin">CLiMP</h1>
            <form action="/action_page.php" className="button">
                <p className="signInTitle"> Sign In</p>
                <div className="formGroup">
                    <label for="email">Email address:</label> <br />
                    <input type="email" className="form-control" id="email" placeholder="Enter your email"></input>
                </div>
                <div className="formGroup">
                    <label for="pwd">Password:</label> <br />
                    <input type="password" className="form-control" id="pwd" placeholder="Enter your password"></input>
                </div>
                <div className="formGroup">
                    <label for="pwd">Retype Password:</label> <br />
                    <input type="password" className="form-control" id="pwd" placeholder="Retype your password"></input>
                </div>
                <div className="formGroup">
                    <label for="pwd">Device ID:</label> <br />
                    <input type="password" className="form-control" id="pwd" placeholder="Enter your device ID"></input>
                </div>
                <button type="submit" onClick={this.onClick} className="btnLogin">Submit</button>
            </form>
        </div>

      </div>
    );
  }
}

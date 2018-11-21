import React, { Component } from "react"
import { connect } from "react-redux"
import "./Login.css";

class Login extends Component {
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
    this.props.onDeviceSelect();
    return
  }

  render() {
    return (
      <div className="Login">
        <div className="loginWrapper">
            <h1 className="logoTitleLogin">CLiMP</h1>
            <form action="/action_page.php" className="button">
                <p className="signInTitle"> Choose Device</p>
                <div className="formGroup">
                    <select>
                        { this.props.tags.map((tag) => <option value={tag}>{tag}</option>) }
                    </select>
                </div>
                <button type="submit" onClick={this.onClick} className="btnLogin">Select</button>
                <p className="signUpLink">
                  Have a question? We would<br /> love to help <a href="">email us</a>
                </p>
            </form>
            
        </div>

      </div>
    );
  }
}

function mapStateToProps(state){
  return {
      //tags:state.tags
      tags: ["All Images"]
  }
}

export default  connect(mapStateToProps)(Login);
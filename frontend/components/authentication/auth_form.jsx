import React from 'react';

import { createSession, createUser } from '../../api_util';

class AuthForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      type: "login",
      username: "",
      email: "",
      password: ""
    }

    this.makeSelection = this.makeSelection.bind(this);
    this.update = this.update.bind(this);
    this.submit = this.submit.bind(this);
    this.signup = this.signup.bind(this);
    this.login = this.login.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.currentTarget.value});
    }
  }

  submit() {
    this.state.type === "login" ? this.login() : this.signup()
  }

  login() {
    const data = {email: this.state.email, password: this.state.password};
    createSession(data);
  }

  signup() {
    const data = {username: this.state.username, email: this.state.email, password: this.state.password};
    const loginData = {email: this.state.email, password: this.state.password};
    createUser(data).then( () => createSession(loginData));
  }

  makeSelection(e) {
    const text = e.currentTarget.innerText;
    if (text === "SIGN UP") {
      this.setState({type: "signup", username: "", email: "", password: ""})
    } else if (text === "LOGIN") {
      this.setState({type: "login", username: "", email: "", password: ""})
    }
  }

  render() {
    const signupClass = this.state.type === "signup" ? "selected" : "";
    const loginClass = this.state.type === "login" ? "selected" : "";
    const usernameSection = this.state.type === "login" ? null :
      (<div className="auth-form-field">
        <div className="auth-form-field-blue"></div>
        <img className="auth-form-icon" src="assets/ic-username.png"></img>
        <input onChange={this.update("username")} className="auth-form-input" type="text" placeholder="Username" value={this.state.username}></input>
      </div>)
    const buttonText = this.state.type === "login" ? "LOGIN" : "SIGN UP"

    return(
      <div id="auth-form">
        <div id="auth-form-selector">
          <div style={{width: "200px"}}><h2 onClick={this.makeSelection} className={`auth-form-selection ${signupClass}`}>SIGN UP</h2></div>
          <div style={{width: "200px"}}><h2 onClick={this.makeSelection} className={`auth-form-selection ${loginClass}`}>LOGIN</h2></div>
        </div>
        <div id="auth-form-fields">
          {usernameSection}
          <div className="auth-form-field">
            <div className="auth-form-field-blue"></div>
            <img className="auth-form-icon" src="assets/ic-email.png"></img>
            <input onChange={this.update("email")} className="auth-form-input" type="text" placeholder="Email" value={this.state.email}></input>
          </div>
          <div className="auth-form-field">
            <div className="auth-form-field-blue"></div>
            <img className="auth-form-icon" src="assets/ic-password.png"></img>
            <input onChange={this.update("password")} className="auth-form-input" type="password" placeholder="Password" value={this.state.password}></input>
          </div>
        </div>
        <div onClick={this.submit} id="auth-form-button">
          {buttonText}
        </div>
      </div>
    )
  }
}

export default AuthForm;

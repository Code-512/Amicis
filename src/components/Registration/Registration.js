import React from "react";
import ReactDOM from "react-dom";
import axios from 'axios';

import "./style.css";

function validate(email, password, firstName, lastName) {
  // true means invalid, so our conditions got reversed
  return {
    email: email.length === 0,
    password: password.length === 0,
    firstName: firstName.length === 0,
    lastName: lastName.length === 0
  };
}

class Registration extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      firstName: "",
      lastName: "",

      touched: {
        email: false,
        password: false,
        firstName: false,
        lastName: false
      }
    };
  }

  handleEmailChange = evt => {
    this.setState({ email: evt.target.value });
  };

  handlePasswordChange = evt => {
    this.setState({ password: evt.target.value });
  };

  handleFirstNameChange = evt => {
    this.setState({ firstName: evt.target.value });
  };

  handleLastNameChange = evt => {
    this.setState({ lastName: evt.target.value });
  };

  handleBlur = field => evt => {
    this.setState({
      touched: { ...this.state.touched, [field]: true }
    });
  };

  handleSubmit = evt => {
    console.log('handle submit')
    evt.preventDefault()
  
    if (!this.canBeSubmitted()) {
      evt.preventDefault();
      return;
    }
    const { email, password } = this.state;
    alert(`Signed up with email: ${email} password: ${password}`);
    const newUser = {
      email: this.state.email,
      password: this.state.password,
      firstName: this.state.firstName,
      lastName: this.state.lastName
    }
    axios.post('/api/user/register', newUser).then(response => {
      console.log(response);
    })
  };

  canBeSubmitted() {
    const errors = validate(this.state.email, this.state.password, this.state.firstName, this.state.lastName);
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    return !isDisabled;
  }

  render() {
    const errors = validate(this.state.email, this.state.password, this.state.firstName, this.state.lastName);
    const isDisabled = Object.keys(errors).some(x => errors[x]);

    const shouldMarkError = field => {
      const hasError = errors[field];
      const shouldShow = this.state.touched[field];

      return hasError ? shouldShow : false;
    };

    return (
      <form >
        <input
          className={shouldMarkError("email") ? "error" : ""}
          type="text"
          placeholder="Enter email"
          value={this.state.email}
          onChange={this.handleEmailChange}
          onBlur={this.handleBlur("email")}
        />
        <input
          className={shouldMarkError("password") ? "error" : ""}
          type="password"
          placeholder="Enter password"
          value={this.state.password}
          onChange={this.handlePasswordChange}
          onBlur={this.handleBlur("password")}
        />
        <input
          className={shouldMarkError("firstName") ? "error" : ""}
          type="firstName"
          placeholder="Enter first name"
          value={this.state.firstName}
          onChange={this.handleFirstNameChange}
          onBlur={this.handleBlur("firstName")}
        />
        <input
          className={shouldMarkError("lastName") ? "error" : ""}
          type="lastName"
          placeholder="Enter last name"
          value={this.state.lastName}
          onChange={this.handleLastNameChange}
          onBlur={this.handleBlur("lastName")}
        />
        <button onClick={this.handleSubmit}>Sign up</button>
      </form>
    );
  }
}



export default Registration
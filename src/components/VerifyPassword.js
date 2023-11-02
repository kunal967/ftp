import React, { Component } from "react";

export default class VerifyPassword extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);

    this.state = {
      enteredPassword: "",
      isPasswordValid: false,
    };
  }

  onClick(e) {
    this.props.onClick(e);
  }

  handlePasswordChange = (event) => {
    this.setState({ enteredPassword: event.target.value });
  };
  verifyPassword = () => {
    const { enteredPassword } = this.state;
    const generatedPassword = this.props.generatePassword;

    if (enteredPassword === generatedPassword) {
      this.setState({ isPasswordValid: true });
      this.props.onPasswordVerified(); // Call the onPasswordVerified prop
    } else {
      this.setState({ isPasswordValid: false });
    }
  };
  render() {
    const { enteredPassword, isPasswordValid } = this.state;
    return (
      <div>
        <input
          type="password"
          value={enteredPassword}
          onChange={this.handlePasswordChange}
        />
        <button onClick={this.verifyPassword}>Verify Password</button>
        {isPasswordValid ? (
          <button className="download-button" onClick={this.onClick}>
            Download
          </button>
        ) : (
          <p>Password is invalid!</p>
        )}
      </div>
    );
  }
}

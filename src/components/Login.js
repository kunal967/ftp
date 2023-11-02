import React, { Component } from 'react'

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isLogin: true, // true for login, false for sign up
          email: "",
          password: "",
          confirmPassword: "",
          error: "",
        };
      }
    
      handleInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
      };
    
      handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.isLogin) {
          // handle login
          console.log("Logging in with email:", this.state.email);
        } else {
          // handle sign up
          if (this.state.password !== this.state.confirmPassword) {
            this.setState({ error: "Passwords do not match" });
            return;
          }
          console.log("Signing up with email:", this.state.email);
        }
      };
    
      handleToggle = () => {
        this.setState({ isLogin: !this.state.isLogin, error: "" });
      };
    
      render() {
        return (
          <div className="container ">
            <h1>{this.state.isLogin ? "Log in" : "Sign up"}</h1>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleInputChange}
                  required
                />
              </div>
              {!this.state.isLogin && (
                <div className="form-group">
                  <label htmlFor="confirmPassword">Confirm password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={this.state.confirmPassword}
                    onChange={this.handleInputChange}
                    required
                  />
                </div>
              )}
              <div className="form-group">
                <button type="submit" className="btn btn-primary">
                  {this.state.isLogin ? "Log in" : "Sign up"}
                </button>
              </div>
            </form>
            <div>
              {this.state.isLogin ? (
                <p>
                  Don't have an account?{" "}
                  <button onClick={this.handleToggle} className="btn btn-link">
                    Sign up
                  </button>
                </p>
              ) : (
                <p>
                  Already have an account?{" "}
                  <button onClick={this.handleToggle} className="btn btn-link">
                    Log in
                  </button>
                </p>
              )}
            </div>
            {this.state.error && (
              <div className="alert alert-danger" role="alert">
                {this.state.error}
              </div>
            )}
          </div>
        );
      }
}

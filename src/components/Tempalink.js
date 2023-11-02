import React from "react";
// import QRCode from 'react-qr'

export default class Tempalink extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);

    this.state = {
      password: "",
    };
  }

  generatePassword = () => {
    const length = 16;
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let password = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters.charAt(randomIndex);
    }

    this.setState({ password });
  };

  onClick(e) {
    e.target.setSelectionRange(0, 9999);
  }

  render() {
    var url = window.location.origin + "/" + this.props.token;
    var shortUrl =
      window.location.origin + "/download/" + this.props.shortToken;

    return (
      <div className="tempalink">
        {/* <div className="qr">
        <QRCode text={url} />
      </div> */}
        <div className="urls">
          <div className="long-url">
            <input onClick={this.onClick}  readOnly type="text" value={url} />
          </div>

          <div className="short-url">
            or, for short: <span>{shortUrl}</span>
          </div>
          <div>
          <button onClick={this.generatePassword}>Generate Password</button>
            <p>Password: {this.state.password}</p>
          </div>
        </div>
      </div>
    );
  }
}

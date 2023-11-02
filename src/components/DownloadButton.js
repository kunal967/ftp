import React from "react";
import Tempalink from "./Tempalink";

export default class DownloadButton extends React.Component {
  constructor() {
    super()
    this.onClick = this.onClick.bind(this)
  }

  onClick(e) {
    this.props.onClick(e);
  }

  render() {
    return <button
      className="download-button"
      onClick={this.onClick}>
      Download
    </button>
  }
}

DownloadButton.propTypes = {
  onClick: React.PropTypes.func.isRequired,
  generatedPassword: React.PropTypes.string.isRequired, // Add the prop type for generatedPassword
};

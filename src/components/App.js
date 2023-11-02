import Bootstrap from "./Bootstrap";
import ErrorPage from "./ErrorPage";
import FrozenHead from "react-frozenhead";
import React from "react";
import SupportStore from "../stores/SupportStore";
import { RouteHandler } from "react-router";
import ga from "react-google-analytics";


export default class App extends React.Component {
  constructor() {
    super();
    this.state = SupportStore.getState();

    this._onChange = () => {
      this.setState(SupportStore.getState());
    };
  }

  componentDidMount() {
    SupportStore.listen(this._onChange);
  }

  componentWillUnmount() {
    SupportStore.unlisten(this._onChange);
  }

  render() {
    return (
      <html lang="en">
        <FrozenHead>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="monetization" content="$twitter.xrptipbot.com/kernio" />
          <meta property="og:url" content="https://file.pizza" />
          <meta
            property="og:title"
            content="Swift Share - Your files, delivered."
          />
          <meta
            property="og:description"
            content="Peer-to-peer file transfers in your web browser."
          />
          <meta
            property="og:image"
            content="https://file.pizza/images/fb.png"
          />
          <title>Swift Share - Your files, delivered.</title>
          <link rel="stylesheet" href="/fonts/fonts.css" />
          <Bootstrap data={this.props.data} />
          <script src="https://cdn.jsdelivr.net/webtorrent/latest/webtorrent.min.js" />
          <script src="/app.js" />
        </FrozenHead>

        <body>
          <div className="header">
            <img src="/images/Logo-with-subheading.png" alt="Logo" className="header-img"/>
          </div>
          <div className="container">
            {this.state.isSupported ? <RouteHandler /> : <ErrorPage />}
          </div>
          <footer className="footer">
            <p className="paragraph">
              Free Decentralized file transfers in your browser. 
            {/* <br/> */}
              We never store anything....
            </p>
            <p>@2023</p>
          </footer>
          <script>FilePizza()</script>
          {/* { process.env.GA_ACCESS_TOKEN ? <ga.Initializer /> : <div></div> } */}
        </body>
      </html>
    );
  }
}

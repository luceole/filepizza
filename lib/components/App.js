import Bootstrap from "./Bootstrap";
import ErrorPage from "./ErrorPage";
import FrozenHead from "react-frozenhead";
import React from "react";
import SupportStore from "../stores/SupportStore";
import { RouteHandler } from "react-router";
import ga from "react-google-analytics";

ga("create", "UA-62785624-1", "auto");
ga("send", "pageview");

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
          <meta property="og:url" content="https://file.pizza" />
          <meta
            property="og:title"
            content="Echange de Fichiers"
          />
          <meta
            property="og:description"
            content="Peer-to-peer entre Navigateurs."
          />
          <meta
            property="og:image"
            content="https://file.pizza/images/fb.png"
          />
          <title>FilePizza - Echange de Fichiers</title>
          <link rel="stylesheet" href="/fonts/fonts.css" />
          <Bootstrap data={this.props.data} />
          <script src="https://cdn.jsdelivr.net/webtorrent/latest/webtorrent.min.js" />
          <script src="/app.js" />
        </FrozenHead>

        <body>
          <div className="container">
            {this.state.isSupported ? <RouteHandler /> : <ErrorPage />}
          </div>
          <footer className="footer">
            <p>
              <script
                id="fb13c4g"

              />{" "}

            </p>

            <p className="byline">
             Adaptation: Luc Bourdot -

              <a href="https://github.com/luceole/filepizza" target="_blank">
                Fork On Github
              </a>
            </p>
          </footer>
          <script>FilePizza()</script>
          <ga.Initializer />
        </body>
      </html>
    );
  }
}

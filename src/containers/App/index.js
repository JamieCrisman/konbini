import React, {Component} from "react";
//import {Link} from "react-router";

export class AppHeader extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper cyan">
          <a href="#" className="brand-logo center">
            KONBINI・コンビニ
          </a>
        </div>
      </nav>
    );
  }
}

export class AppFooter extends Component {
  render() {
    return(
      <footer className="page-footer cyan">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">About Konbini</h5>
              <p className="grey-text text-lighten-4">
                Konbini is a directory of web resources for learning the Japanese language. If you would like to recommend a resource, please contact us.
              </p>
            </div>
            <div className="col l4 offset-l2 s12">
              <h5 className="white-text">Links</h5>
              <ul>
                <li><a className="grey-text text-lighten-3" href="#">Github Repo</a></li>
                <li><a className="grey-text text-lighten-3" href="http://longest.voyage">Longest.Voyage</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            Developed and Maintained by <a href="http://github.com/jamiecrisman" className="grey-text text-lighten-4">James Crisman</a>
          </div>
        </div>
      </footer>
    );
  }
}

export default class App extends Component {

  render() {
    return (
      <div>
        <AppHeader/>
        <div className="container-fluid">
          {this.props.children}
        </div>
        <AppFooter/>
      </div>
    );
  }
}


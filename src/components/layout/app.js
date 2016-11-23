import React from 'react';
import NavBar from './navbar';
import Footer from './footer';

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="header">
          <NavBar />
        </div>
        <div className="content">
          {this.props.children}
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
}

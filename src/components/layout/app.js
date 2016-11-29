import React from 'react';
import NavBar from './navbar';
import Footer from './footer';

const Style ={
  body: {
    width: '100%',
    height: '700px',
  },
  footer: {
    width: '100%',
    height: '100px',
  },
}

const flexStyle = {
  layout:{
    display: 'flex',
    flexDirection: 'column',
  }
}
export default class App extends React.Component {
  render() {
    return (
      <div style={flexStyle.layout}>
        <div>
          <NavBar />
        </div>
        <div style={Style.body}>
          {this.props.children}
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

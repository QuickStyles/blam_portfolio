import React from 'react';
import Footer from './footer.js';

const divStyle = {
  height: '700px',
  widht: '200px',
  backgroundImage: 'url(../../pictures/vancouver-green.jpg)',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center'
}
export default class Home extends React.Component {

  render() {
    return (
      <div style={divStyle}>
        <h3>Home</h3>
        <div><Footer /></div>
      </div>
    );
  }
}

import React from 'react';
import Dialog from './dialog.js';
import Projects from './projects.js';

const divStyle = {
  background: {
    height: 'inherit',
    widht: 'inherit',
    backgroundImage: 'url(../../pictures/web-development.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    zIndex: '0',
  },
  container: {
    margin: '100px',
    zIndex: '1',
  },
}

export default class Work extends React.Component {
  render() {
    return (
      <div style={divStyle.background}>
        <div style={divStyle.container}>
          <div><Dialog /></div>
          <div><Projects /></div>
        </div>
      </div>
    );
  }
}

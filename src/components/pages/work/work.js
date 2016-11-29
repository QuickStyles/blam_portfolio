import React from 'react';
import Dialog from './dialog.js';

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
    marginTop: '100px',
    marginLeft: '100px',
    position: 'absolute',
    zIndex: '1',
    height: '100%',
    width: '100%',
  },
}

export default class Work extends React.Component {
  render() {
    return (
      <div style={divStyle.background}>
        <div style={divStyle.container}>
          <div><Dialog /></div>
        </div>
      </div>
    );
  }
}

import React from 'react';
import Introduction from './introduction.js';

const divStyle = {
  background: {
    width: 'inherit',
    height: 'inherit',
    backgroundImage: 'url(../../pictures/vancouver-green.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    zIndex: '0',
  },
  container: {
    margin: '100px',
    zIndex: '1',
  },
};

export default class Home extends React.Component {
  render() {
    return (
      <div style={divStyle.background}>
        <div style={divStyle.container}>
          <Introduction />
        </div>
      </div>
    );
  }
}

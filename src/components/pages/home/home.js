import React from 'react';
import Introduction from './introduction.js';

const divStyle = {
  background: {
    height: '700px',
    widht: '200px',
    backgroundImage: 'url(../../pictures/vancouver-green.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    zIndex: '0',
  },
  container: {
    marginTop: '100px',
    marginLeft: '100px',
    position: 'absolute',
    zIndex: '1',
  },
}
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

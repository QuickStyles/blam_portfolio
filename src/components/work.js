import React from 'react';

const divStyle = {
  height: '700px',
  widht: '200px',
  backgroundImage: 'url(../../pictures/web-development.jpg)',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center'
}

export default class Work extends React.Component {
  render() {
    return (
      <div style={divStyle}>
        <h3>Work</h3>
      </div>
    );
  }
}

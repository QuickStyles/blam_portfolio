import React from 'react';

const divStyle = {
  height: '700px',
  widht: '200px',
  backgroundImage: 'url(../../pictures/skills.jpg)',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center'
}

export default class Skills extends React.Component {
  render() {
    return (
      <div style={divStyle}>
        <h3>Skills</h3>
      </div>
    );
  }
}

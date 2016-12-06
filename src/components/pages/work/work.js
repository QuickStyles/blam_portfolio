import React from 'react';
import Dialog from './../../layout/dialog.js';
import Projects from './projects.js';

const divStyle = {
  background: {
    width: 'inherit',
    height: 'inherit',
    backgroundImage: 'url(../../pictures/web-development.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    zIndex: '0',
    position: 'absolute',
  },
  container: {
    margin: '100px',
    zIndex: '1',
  },
  outro: {
    position: 'absolute',
    bottom: '0',
    right: '20%',
  }
}

export default class Work extends React.Component {
  render() {
    const dialog = {
      intro: 'I started programming because I love creating things. Here are some of my works...',
      outro: 'and of course there is many more to come.'
    }
    return (
      <div style={divStyle.background}>
        <div style={divStyle.container}>
          <div><Dialog dialog={dialog.intro}/></div>
          <div><Projects /></div>
          <div style={divStyle.outro}><Dialog dialog={dialog.outro}/></div>
        </div>
      </div>
    );
  }
}

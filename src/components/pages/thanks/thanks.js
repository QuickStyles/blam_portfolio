import React from 'react';
import Dialog from './../../layout/dialog.js';

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

export default class Thanks extends React.Component {
  render() {
    const dialog = {
      intro: 'Thank you for visiting!',
      info: "This is version 1.0 of my portfolio page",
      todo: "Things to come include:",
      t1: "interactive backgrounds for each page",
      t2: "reverse page swap animation",
      t3: "in-depth showcases and gallery for skills and projects",
      t4: "personal blog",
      current: "I'm currently working on a game using React Native"
    }
    return (
      <div style={divStyle.container}>
        <div><Dialog dialog={dialog.intro}/></div>
        <div><Dialog dialog={dialog.info}/></div>
        <div><Dialog dialog={dialog.todo}/></div>
        <div><Dialog dialog={dialog.t1}/></div>
        <div><Dialog dialog={dialog.t2}/></div>
        <div><Dialog dialog={dialog.t3}/></div>
        <div><Dialog dialog={dialog.t4}/></div>
        <div><Dialog dialog={dialog.current}/></div>
      </div>
    );
  }
}

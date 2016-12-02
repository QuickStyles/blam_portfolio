import React from 'react';
import ReactDOM from 'react-dom';
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
  componentWillAppear() {console.log('component will appear');}
  componentDidAppear() {console.log('component did appear');}
  componentWillEnter() {console.log('component will enter');}
  componentDidEnter() {console.log('component did enter');}
  componentWillLeave() {console.log('component will leave');}
  componentDidLeave() {console.log('component did leave');}
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

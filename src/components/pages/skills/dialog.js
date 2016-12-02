import React from 'react';

const dialogStyle ={
  p: {
    fontSize: '20px',
    fontFamily: 'Courier New',
  }
}
export default class Dialog extends React.Component {
  render() {
    return (
      <div>
        <p style={dialogStyle.p}>
          I'm constantly learning new things, here are some I already know...
        </p>
      </div>
    )
  }
}

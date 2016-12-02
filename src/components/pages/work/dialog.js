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
          I started programming because I love creating things. Here are some of my works...
        </p>
      </div>
    )
  }
}

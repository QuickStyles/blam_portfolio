import React from 'react';

const Style = {
  icon: {
    width: '40px',
    height: '40px',
  },
  name: {
    fontSize: '40px',
    fontFamily: 'Courier New',
  },
}

export default class ReactSkill extends React.Component {
  render() {
    return(
      <div>
        <span>
          <img src="./../../../../../pictures/react-logo-1000-transparent.png" style={Style.icon}></img>
        </span>
        <span style={Style.name}>
          React
        </span>
      </div>
    )
  }
}

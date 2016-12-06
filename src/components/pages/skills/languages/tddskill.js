import React from 'react';

const Style = {
  icon: {
    width: '40px',
    height: '40px',
  },
  name: {
    fontSize: '40px',
  },
}

export default class TDDSkill extends React.Component {
  render() {
    return(
      <div>
        <span>
          <img src="./../../../../../pictures/tdd-icon.png" style={Style.icon}></img>
        </span>
        <span style={Style.name}>
          TDD
        </span>
      </div>
    )
  }
}

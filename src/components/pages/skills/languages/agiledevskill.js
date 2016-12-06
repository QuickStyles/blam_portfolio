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

export default class AgileSkill extends React.Component {
  render() {
    return(
      <div>
        <span>
          <img src="./../../../../../pictures/agile-dev.png" style={Style.icon}></img>
        </span>
        <span style={Style.name}>
          Agile
        </span>
      </div>
    )
  }
}

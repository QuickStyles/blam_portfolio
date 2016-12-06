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

export default class GitSkill extends React.Component {
  render() {
    return(
      <div>
        <span>
          <img src="./../../../../../pictures/git-icon.png" style={Style.icon}></img>
        </span>
        <span style={Style.name}>
          git
        </span>
      </div>
    )
  }
}

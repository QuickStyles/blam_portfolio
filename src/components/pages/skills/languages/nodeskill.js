import React from 'react';

const Style = {
  icon: {
    color: 'red',
    fontSize: '40px',
  },
  name: {
    fontSize: '40px',
  },
}

export default class NodeSkill extends React.Component {
  render() {
    return(
      <div>
        <span>
          <i className="icon-nodejs" style={Style.icon}></i>
        </span>
        <span style={Style.name}>
          Node
        </span>
      </div>
    )
  }
}
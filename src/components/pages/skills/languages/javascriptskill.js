import React from 'react';

const Style = {
  icon: {
    color: 'orange',
    fontSize: '40px',
  },
  name: {
    fontSize: '40px',
  },
}

export default class JavascriptSkill extends React.Component {
  render() {
    return(
      <div>
        <span>
          <i className="icon-javascript" style={Style.icon}></i>
        </span>
        <span style={Style.name}>
          Javascript
        </span>
      </div>
    )
  }
}

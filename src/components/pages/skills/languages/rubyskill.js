import React from 'react';

const Style = {
  icon: {
    color: 'red',
    fontSize: '40px',
  },
}

export default class RubySkill extends React.Component {
  render() {
    return(
      <div>
        <span>
          <i className="icon-ruby" style={Style.icon}></i>
        </span>
        <span style={Style.name}>
          Ruby
        </span>
      </div>
    )
  }
}

import React from 'react';

const Style = {
  icon: {
    color: 'red',
    fontSize: '40px',
  },
  name: {
    fontSize: '40px',
    fontFamily: 'Courier New',
  },
}

export default class RubyOnRailsSkill extends React.Component {
  render() {
    return(
      <div>
        <span>
          <i className="icon-ruby-on-rails-alt" style={Style.icon}></i>
        </span>
        <span style={Style.name}>
          Ruby On Rails
        </span>
      </div>
    )
  }
}

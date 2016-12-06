import React from 'react';

const Style = {
  icon: {
    color: 'blue',
    fontSize: '40px',
  },
}

export default class PostgreSQLSkill extends React.Component {
  render() {
    return(
    <div>
      <span>
        <i className="icon-postgres" style={Style.icon}></i>
      </span>
      <span style={Style.name}>
        PostgreSQL
      </span>
    </div>
    )
  }
}

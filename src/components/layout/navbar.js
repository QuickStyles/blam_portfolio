import React from 'react';
import { Link } from 'react-router';

const Style = {
  div: {
    marginTop: '50px',
    marginLeft: '50px',
    width: '50%',
  },
  li: {
    padding: '10px',
  },
  a: {
    textDecoration: 'none',
    color: 'black',
  },
}

const flexStyle = {
  ul: {
    display: 'flex',
    flexDirection: 'row',
    listStyle: 'none',
  },
}
export default class NavBar extends React.Component {
  render() {
    return (
      <div style={Style.div}>
        <ul style={flexStyle.ul}>
          <li style={Style.li}><a>Resume</a></li>
          <li style={Style.li}>« »</li>
          <li style={Style.li}><Link to='/' style={Style.a}>Home</Link></li>
          <li style={Style.li}><Link to='/skills' style={Style.a}>Skills</Link></li>
          <li style={Style.li}><Link to='/work' style={Style.a}>Work</Link></li>
          <li style={Style.li}><Link to='/thanks' style={Style.a}>Thanks</Link></li>
        </ul>
      </div>
    );
  }
}

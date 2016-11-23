import React from 'react';
import { Link } from 'react-router';
import Home from '../pages/home/home.js';
import Skills from '../pages/skills/skills.js';
import Work from '../pages/work/work.js';
import Thanks from '../pages/thanks/thanks.js';

const navStyle = {
  div: {
    marginTop: '50px',
    marginLeft: '50px',
  },
  ul: {
    listStyle: 'none',
    margin: '0',
    padding: '0',
  },
  li: {
    float: 'left',
    width: '60px',
  },
  a: {
    textDecoration: 'none',
  },
}

export default class NavBar extends React.Component {
  render() {
    return (
      <div style={navStyle.div}>
        <ul style={navStyle.ul}>
          <li style={navStyle.li}><a style={navStyle.a}>Resume | </a></li>
          <li style={navStyle.li}><Link to='/home' style={navStyle.a}>Home</Link></li>
          <li style={navStyle.li}><Link to='/skills' style={navStyle.a}>Skills</Link></li>
          <li style={navStyle.li}><Link to='/work' style={navStyle.a}>Work</Link></li>
          <li ><Link to='/thanks' style={navStyle.a}>Thanks</Link></li>
        </ul>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

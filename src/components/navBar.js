import React from 'react';
import { Link } from 'react-router';
import Home from './home';
import Skills from './skills';
import Work from './work';
import Thanks from './thanks';

export default class NavBar extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to='/home'>Home</Link></li>
          <li><Link to='/skills'>Skills</Link></li>
          <li><Link to='/work'>Work</Link></li>
          <li><Link to='/thanks'>Thanks</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

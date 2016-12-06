import React from 'react';
import { Link } from 'react-router';

const Style = {
  div: {
    marginTop: '25px',
    marginLeft: '50px',
    width: '50%',
    fontFamily: 'Courier New',
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
  changeSideBarStatus() {
    this.props.showSideBar(true)
  }
  render() {
    return (
      <div style={Style.div}>
        <ul style={flexStyle.ul}>
          <li style={Style.li} onClick={this.changeSideBarStatus.bind(this)}><Link to='résumé' style={Style.a}>Résumé</Link></li>
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

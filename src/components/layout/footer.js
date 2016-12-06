import React from 'react';
import FooterIcon from './icons/footericons.js';


const FlexStyle = {
  div: {
    display: 'flex',
    width: '100%',
    height: 'inherit',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
}

export default class Footer extends React.Component {
  render() {
    const icons = {
      twitter: {
        href: 'https://twitter.com/brandonywlam',
        className: 'fa-twitter-square',
        name: 'fa-twitter-square',
        size: '4x',
      },
      linkedin: {
        href: 'https://ca.linkedin.com/in/brandonywlam',
        className: 'fa-linkedin-square',
        name: 'fa-linkedin-square',
        size: '4x',
      },
      github: {
        href: 'https://github.com/QuickStyles',
        className: 'fa-github-square',
        name: 'fa-github-square',
        size: '4x',
      },
    }
    return (
      <div style={FlexStyle.div}>
        <FooterIcon icon={icons.twitter}/>
        <FooterIcon icon={icons.linkedin}/>
        <FooterIcon icon={icons.github}/>
      </div>
    );
  }
}

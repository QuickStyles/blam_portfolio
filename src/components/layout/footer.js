import React from 'react';
import TwitterIcon from './icons/twitter_square.js';
import LinkedInIcon from './icons/linkedin_square.js';
import GithubIcon from './icons/github_square.js';

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
    return (
      <div style={FlexStyle.div}>
        <TwitterIcon />
        <LinkedInIcon />
        <GithubIcon />
      </div>
    );
  }
}

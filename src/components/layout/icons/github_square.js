import React from 'react';
import FontAwesome from 'react-fontawesome';

export default class GithubIcon extends React.Component {
  render() {
    return(
      <a href='https://github.com/QuickStyles'>
        <FontAwesome
          className='fa-github-square'
          name='fa-github-square'
          size='4x'
          style={{ color: 'black' }}
        />
      </a>
    );
  }
}

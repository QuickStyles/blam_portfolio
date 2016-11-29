import React from 'react';
import FontAwesome from 'react-fontawesome';

export default class TwitterIcon extends React.Component {
  render() {
    return(
      <a href='https://twitter.com/brandonywlam'>
        <FontAwesome
          className='fa-twitter-square'
          name='fa-twitter-square'
          size='4x'
          style={{ color: 'black' }}
        />
      </a>
    );
  }
}

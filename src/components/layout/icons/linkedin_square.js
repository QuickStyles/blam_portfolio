import React from 'react';
import FontAwesome from 'react-fontawesome';

export default class LinkedInIcon extends React.Component {
  render() {
    return(
      <a href='https://ca.linkedin.com/in/brandonywlam'>
        <FontAwesome
          className='fa-linkedin-square'
          name='fa-linkedin-square'
          size='4x'
          style={{ color: 'black' }}
        />
      </a>
    );
  }
}

import React from 'react';
import FontAwesome from 'react-fontawesome';

export default class FacebookIcon extends React.Component {
  render() {
    return(
      <div>
        <FontAwesome
          className='fa-facebook-square'
          name='fa-facebook-square'
          size='2x'
          style= {{ color: 'black' }}
        />
      </div>
    );
  }
}

import React from 'react';
import FontAwesome from 'react-fontawesome';

const Style = {
  name: {
    fontSize: '40px',
  },
}

export default class CSS3Skill extends React.Component {
  render() {
    return(
      <div>
        <span>
          <FontAwesome
            className='fa-css3'
            name='fa-css3'
            size='lg'
            style={{ color: 'dodgerblue'}}
          />
        </span>
        <span style={Style.name}>
          CSS3
        </span>
      </div>
    )
  }
}

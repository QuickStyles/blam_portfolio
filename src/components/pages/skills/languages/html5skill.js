import React from 'react';
import FontAwesome from 'react-fontawesome';

const Style = {
  name: {
    fontSize: '40px',
  },
}

export default class HTML5Skill extends React.Component {
  render() {
    return(
      <div>
        <span>
          <FontAwesome
            className='fa-html5'
            name='fa-html5'
            size='lg'
            style={{ color: 'darkorange'}}
          />
        </span>
        <span style={Style.name}>
          HTML5
        </span>
      </div>
    )
  }
}

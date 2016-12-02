import React from 'react';

const dialogStyle ={
  p: {
    fontSize: '20px',
    fontFamily: 'Courier New',
  }
}
export default class Introduction extends React.Component {
  render() {
    return (
      <div>
        <p style={dialogStyle.p}>
          Hello! I'm Brandon Lam, a 21 year old junior full stack web developer from beutiful British Columbia...
        </p>
      </div>
    )
  }
}

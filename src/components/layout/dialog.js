import React from 'react';

const dialogStyle ={
  p: {
    fontSize: '20px',
  }
}

export default class Dialog extends React.Component {
  render() {
    return (
      <div>
        <p style={dialogStyle.p}>
          {this.props.dialog}
        </p>
      </div>
    )
  }
}

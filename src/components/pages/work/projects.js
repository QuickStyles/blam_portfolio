import React from 'react';

const flexStyle = {
  div: {
    display: 'flex',
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
}
export default class Projects extends React.Component {
  render() {
    return (
      <div style={flexStyle.div}>
        <p>Project 1</p>
        <p>Project 2</p>
      </div>
    )
  }
}

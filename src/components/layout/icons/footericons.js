import React from 'react';
import FontAwesome from 'react-fontawesome';

export default class FooterIcon extends React.Component {
  render() {
    return(
      <a href={this.props.icon.href} target="_blank">
        <FontAwesome
          className={this.props.icon.className}
          name={this.props.icon.name}
          size={this.props.icon.size}
          style={{ color: 'black' }}
        />
      </a>
    );
  }
}

import React from 'react';
import Modal from 'boron/DropModal';

const imgStyle = {
  icon: {
    width: '200px',
    height: '125px',
    display: 'inline-block',
    border: '1px solid #ddd',
    borderRadius: '4px',
    padding: '5px',
    backgroundColor: 'transparent',
  },
  picture: {
    display: 'inline-block',
    border: '1px solid #ddd',
    borderRadius: '4px',
    padding: '5px',
    transition: '0.3s',
    display: 'block',
    margin: 'auto',
    width: '50%',
  },
}

const modalStyle = {
  button: {
    border: '1px',
    borderRadius: '4px',
    backgroundColor: 'white',
    color: 'lightblue',
    padding: '5px 10px',
    textAlign: 'center',
    display: 'inline-block',
    fontSize: '15px',
  },
  modal: {
    width: '80%',
    border: '3px solid lightblue',
    borderRadius: '4px',
    padding: '5px',
    backgroundColor: 'white',
    paddding: '32px',
  },
  content: {
    fontSize: '20px',
    fontFamily: 'Courier New',
    textAlign: 'center',
  },
  blue: {
    color: 'lightblue',
  }
}
export default class Project extends React.Component {

  addLink() {
    if (this.props.project.link !== '') {
      return <div><a href={this.props.project.link}>{this.props.project.name}</a></div>
    } else {
      return <div>{this.props.project.name}</div>
    }
  }

  showModal() {
    this.refs.modal.show();
  };

  hideModal() {
    this.refs.modal.hide();
  };

  callback(event) {
    console.log(event);
  };

  render() {
    console.log(this.props);
    console.log(name);
    return (
      <div>
        <button style={modalStyle.button} onClick={this.showModal.bind(this)}>
          <img src={this.props.project.image} style={imgStyle.icon}></img>
          <div>{this.props.project.name}</div>
        </button>
        <Modal ref='modal' modalStyle={modalStyle.modal} contentStyle={modalStyle.content}>
            <img src={this.props.project.image} style={imgStyle.picture}></img>
            {this.addLink()}
            <div><p style={modalStyle.blue}>Date:</p> {this.props.project.date}</div>
            <div><p style={modalStyle.blue}>Description:</p> {this.props.project.description}</div>
            <div><p style={modalStyle.blue}>Technologies used:</p> {this.props.project.technologies}</div>
            <div><a href={this.props.project.sourcecode}>Source Code</a></div>
        </Modal>
      </div>
    )
  }
}

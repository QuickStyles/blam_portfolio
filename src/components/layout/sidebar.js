import React from 'react';
import ReactDOM from 'react-dom';
import { TweenMax } from 'gsap';
import FontAwesome from 'react-fontawesome';

const barStyle = {
  bar: {
    position: 'fixed',
    width: '600px',
    height: '100%',
    zindex: 3,
    backgroundColor: 'rgba(62,182,155,0.9)',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'Courier New',

  },
  title: {
    margin: '20px',
    fontSize: '30px',
    fontWeight: 'bold',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  content: {

    textAlign: 'center',
    fontSize: '20px',
  },
  closeButton: {
    right: 0,
  }
}
export default class SideBar extends React.Component {

  changeSideBarStatus() {
    this.props.showSideBar(false)
  }

  componentDidMount() {
    const sidebar = ReactDOM.findDOMNode(this);
    console.log(sidebar);
    TweenMax.fromTo(sidebar, 1.5, {x: -600}, {x:0});
  }

  render() {
    return(
      <div style={ barStyle.bar }>
        <div style={ barStyle.title }>
          <span>
            <p>Brandon Y Lam</p>
          </span>
          <span onClick={this.changeSideBarStatus.bind(this)} style={barStyle.closeButton}>
            <FontAwesome
            className='fa-minus-square'
            name='fa-minus-square'
            size='2x'
            style={{ color: 'white'}}
            />
          </span>
        </div>
        <div style={ barStyle.content }>
            <div>currently seeking opportunities</div>
            <div><p>interests:</p> anything extraterrestrial, games, science, tech</div>
            <div><p>i want to make an impact on:</p> environment, human welfare</div>
            <hr></hr>
            <div>don't be a stranger! email me at:<a href="mailto:brandonywlam@gmail.com?Subject=Hello%20Brandon" target="_top">brandonywlam@gmail.com</a></div>
            <div><p>Last Updated:</p>December 2016</div>
        </div>
      </div>
    )
  }
}

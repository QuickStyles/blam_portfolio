import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import NavBar from './navbar';
import Footer from './footer';
import Home from './../pages/home/home.js';

const Style ={
  body: {
    width: '100%',
    height: '600px',
  },
  footer: {
    width: '100%',
    height: '100px',
  },
}

const flexStyle = {
  layout:{
    display: 'flex',
    flexDirection: 'column',
  }
}

export default class App extends React.Component {
  render() {
    const path = this.props.location.pathname
    const segment = path.split('/')[1] || 'root';
    console.log(path);
    console.log(segment);
    return (
      <div style={flexStyle.layout}>
        <div>
          <NavBar />
        </div>
        <ReactCSSTransitionGroup style={Style.body}
          transitionName='pageSwap'
          transitionAppear={true}
          transitionAppearTimeout={1500}
          transitionEnterTimeout={600}
          transitionLeaveTimeout={600}
        >
          {React.cloneElement(this.props.children, { key: segment })}
        </ReactCSSTransitionGroup>
        <div>
          <Footer style={Style.footer}/>
        </div>
      </div>
    );
  }
}

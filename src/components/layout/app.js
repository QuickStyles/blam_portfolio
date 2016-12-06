import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import NavBar from './navbar';
import Footer from './footer';
import Home from './../pages/home/home.js';
import { browserHistory } from 'react-router';
import SideBar from './sidebar.js';


const Style ={
  body: {
    width: '100%',
    height: '600px',
    fontFamily: 'Courier New',
  },
  footer: {
    width: '100%',
    height: '100px',
  },
  sidebar: {
    zindex: '5',
  },
}

const flexStyle = {
  layout:{
    display: 'flex',
    flexDirection: 'column',
  }
}

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      sidebar: false,
    };
  }
  showSideBar(status) {
    this.setState({ sidebar: status })
  }
  render() {
    let sidebar
    if (this.state.sidebar === true) sidebar = <SideBar status={this.state.sidebar} showSideBar={this.showSideBar.bind(this)} />
    const path = this.props.location.pathname;
    const segment = path.split('/')[1] || 'root';
    return (
      <div style={flexStyle.layout}>
        <div>
          <NavBar showSideBar={this.showSideBar.bind(this)}/>
        </div>
        <ReactCSSTransitionGroup style={Style.body}
          transitionName={segment.split(' ')[1] < 1 ? 'reversePageSwap' : 'pageSwap'}
          transitionAppear={true}
          transitionAppearTimeout={1500}
          transitionEnterTimeout={600}
          transitionLeaveTimeout={600}
        >
          {React.cloneElement(this.props.children, { key: segment })}
        </ReactCSSTransitionGroup>
        {sidebar}
        <div>
          <Footer style={Style.footer}/>
        </div>
      </div>
    );
  }
}

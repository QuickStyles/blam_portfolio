import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute  } from 'react-router'
import App from './src/components/app.js';
import Home from './src/components/home.js';
import Skills from './src/components/skills.js';
import Work from './src/components/work.js';
import Thanks from './src/components/thanks.js';
import Footer from './src/components/footer.js';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path= "/" component = {App}>
      <IndexRoute component = {Home}/>
      <Route path = "home" component={Home}/>
      <Route path = "skills" component={Skills}/>
      <Route path = "work" component={Work}/>
      <Route path = "thanks" component={Thanks}/>
    </Route>
  </Router>
), document.getElementById('app'))

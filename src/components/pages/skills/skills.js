import React from 'react';
import ReactDOM from 'react-dom';
import Dialog from './dialog';
import JavascriptSkill from './languages/javascriptskill.js';
import RubySkill from './languages/rubyskill.js';
import NodeSkill from './languages/nodeskill.js';
import ReactSkill from './languages/reactskill.js';
import PostgreSQLSkill from './languages/postgresql.js';
import JQuerySkill from './languages/jqueryskill.js';
import RubyOnRailsSkill from './languages/rubyonrailsskill.js';

const divStyle = {
  background: {
    width: 'inherit',
    height: 'inherit',
    backgroundImage: 'url(../../pictures/skills.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    zIndex: '0',
  },
  container: {
    margin: '50px',
    zIndex: '1',
  },
}

const flexStyle = {
  container: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    flexBasis: 'content',
  },
}
export default class Skills extends React.Component {

  render() {
    return (
      <div style={divStyle.background}>
        <div style={divStyle.container}>
          <div>
            <Dialog />
          </div>
          <div style={flexStyle.container}>
            <div>
              <JavascriptSkill />
            </div>
            <div>
              <RubySkill />
            </div>
            <div>
              <NodeSkill />
            </div>
            <div>
              <ReactSkill />
            </div>
            <div>
              <PostgreSQLSkill />
            </div>
            <div>
              <RubyOnRailsSkill />
            </div>
            <div>
              <JQuerySkill />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

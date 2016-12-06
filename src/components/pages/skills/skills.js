import React from 'react';
import ReactDOM from 'react-dom';
import Dialog from './../../layout/dialog.js';
import JavascriptSkill from './languages/javascriptskill.js';
import RubySkill from './languages/rubyskill.js';
import NodeSkill from './languages/nodeskill.js';
import ReactSkill from './languages/reactskill.js';
import PostgreSQLSkill from './languages/postgresql.js';
import JQuerySkill from './languages/jqueryskill.js';
import RubyOnRailsSkill from './languages/rubyonrailsskill.js';
import HTML5Skill from './languages/html5skill.js';
import CSS3Skill from './languages/css3skill.js';
import GitSkill from './languages/gitskill.js';
import TDDSkill from './languages/tddskill.js';
import BootstrapSkill from './languages/bootstrapskill.js';
import AgileSkill from './languages/agiledevskill.js';

const divStyle = {
  background: {
    width: 'inherit',
    height: 'inherit',
    backgroundImage: 'url(../../pictures/skills.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    zIndex: '0',
    position: 'absolute',
  },
  container: {
    margin: '100px',
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
    fontFamily: 'Courier New',
    fontSize: '40px'
  },
}
export default class Skills extends React.Component {

  render() {
    const dialog = {
      intro: "I'm constantly learning new things, here are some I already know...",
    }
    return (
      <div style={divStyle.background}>
        <div style={divStyle.container}>
          <div>
            <Dialog dialog={dialog.intro}/>
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
            <div>
              <HTML5Skill />
            </div>
            <div>
              <CSS3Skill />
            </div>
            <div>
              <BootstrapSkill />
            </div>
            <div>
              <TDDSkill />
            </div>
            <div>
              <GitSkill />
            </div>
            <div>
              <AgileSkill />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

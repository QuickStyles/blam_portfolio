import React from 'react';
import Project from './project.js';

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
    const projects = [
      {
        'id': 'indie-arcade',
        'name': 'Indie Arcade',
        'date': 'September 2016',
        'image': './../../../../pictures/indie-arcade.jpeg',
        'link': 'https://indie-arcade.herokuapp.com/',
        'sourcecode': 'https://github.com/CodeCoreYVR/indie_arcade',
        'technologies': 'Ruby, Ruby On Rails, Javascript, PostgreSQL',
        'description': 'Group Project built in association with Envisioning Labs and TestTube. I designed the schema and implementd key features noted in the wire frame',
      },

      {
        'id': 'trim',
        'name': 'TRIM',
        'date': 'October 2016',
        'image': './../../../../pictures/trim-screenshot.jpg',
        'link': '',
        'sourcecode': 'https://github.com/QuickStyles/TRIM',
        'technologies': 'Ruby, Ruby On Rails, Javascript, PostgreSQL',
        'description': 'Final project for CodeCore, simple appointment scheduler for stylists using Google Calendar API, OAuth2, Stripe',
      }
    ]

    return (
      <div style={flexStyle.div}>
        <Project project={projects[0]}/>
        <Project project={projects[1]}/>
      </div>
    )
  }
}

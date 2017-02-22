import React from 'react';
import ReactDOM from 'react-dom';
import Portfolio from './Portfolio/';
import projects from './projectData';

ReactDOM.render(
  <Portfolio projects={projects} />,
  document.getElementById('portfolio')
);

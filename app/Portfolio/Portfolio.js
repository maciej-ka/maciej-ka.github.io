import React from 'react';
import moment from 'moment';
import RolesChart from '../RolesChart/';
import Calendar from '../Calendar/';
import Skills from '../Skills/';
import ProjectList from '../ProjectList/';
import SideChart from '../SideChart/';
import {monthsToHuman} from '../helpers';

class Portfolio extends React.Component {

  constructor(props) {
    super();
    let id=0;
    let projects = props.projects.map(p => {
      p.id = id++;
      p.start = moment(p.start);
      p.end = p.end ? moment(p.end) : moment().startOf('month');
      p.duration = p.end.diff(p.start, 'months');
      p.durationHuman = monthsToHuman(p.duration);
      this.parseRole(p);
      return p;
    });
    this.state = {
      projects: projects
    };
  }

  parseRole(project) {
    var role = project.role.toLowerCase();
    var roles = ['analyst', 'manager', 'developer', 'architect'];
    for(let i=0; i<roles.length; i++) {
      if (role.indexOf(roles[i]) >= 0) {
        project.rolePriority = i;
        project.roleLabel = roles[i];
        return;
      }
    }
  }

  render() {
    return (
      <div>
        <section className='row'>
          <div className='col-sm-12 col-md-6'>
            <img className='strip' src='assets/images/strip1.jpg' />
          </div>
          <div className='hidden-xs hidden-sm col-md-6'>
            <img className='strip' src='assets/images/strip3.jpg' />
          </div>
        </section>

        <section className='row'>
          <div className='col-xs-12 col-sm-6 col-md-4'>
            <h1>Web developer</h1>
            <p>I write code and contribute to Open Source to see how big projects are organized.</p>
            <RolesChart projects={this.state.projects} />
          </div>

          <div className='hidden-xs col-sm-6 col-md-4'>
            <h1>Fullstack</h1>
            <p>Due to possibilities in a modern javascript I moved from the server side to fullstack.</p>
            <SideChart projects={this.state.projects} />
          </div>

          <div className='hidden-xs hidden-sm col-md-4'>
            <h1>Remote</h1>
          </div>
        </section>

        <section>
          <div className='col-sm-8'>
            <h1>Projects</h1>
            <Calendar projects={this.state.projects} />
          </div>

          <div className='col-sm-4'>
            <h1>Skills</h1>
            <Skills
              importantSkills={this.props.importantSkills}
              projects={this.state.projects} />
          </div>
        </section>

        <section className='row'>
          <h1>Maciej Kasprzyk</h1>
          maciej.kasprzyk.it@gmail.com
        </section>

        <section className='row'>
          <ProjectList
            importantSkills={this.props.importantSkills}
            projects={this.state.projects} />
        </section>

        <section>
          <img src='assets/images/footer.png' />
        </section>
      </div>
    );
  }

}

Portfolio.propTypes = {
  projects: React.PropTypes.array,
  importantSkills: React.PropTypes.array
};

Portfolio.defaultProps = {
  importantSkills: [
    'Rails',
    'JavaScript',
    'PHP',
    'CSS',
    'Java',
    'Angular',
    'React',
    'SQL'
  ]
};

export default Portfolio;

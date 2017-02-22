import React from 'react';
import moment from 'moment';
import RolesChart from '../RolesChart/';
import ProjectsChart from '../ProjectsChart/';
import SkillsChart from '../SkillsChart/';

class Portfolio extends React.Component {

  constructor(props) {
    super();
    let skills = [];
    let projects = props.projects.map(p => {
      p.start = moment(p.start);
      p.end = p.end ? moment(p.end) : moment().startOf('month');
      p.duration = p.end.diff(p.start, 'months');
      this.parseRole(p);
      this.parseSkills(p, skills);
      return p;
    });
    skills = skills.sort((a,b) => b.duration - a.duration);
    this.state = {
      projects: projects,
      skills: skills
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

  parseSkills(project, skills) {
    project.skills.forEach(name => {
      let skill = skills.find(s => s.name == name);
      if(!skill) {
        skill = {name: name, duration: 0};
        skills.push(skill);
      }
      skill.duration += project.duration;
    });
  }

  render() {
    return (
      <div>

        <section className='row'>
          <div className='col-sm-12'>
            <img className='strip' src='assets/images/strip1.jpg' />
          </div>
        </section>

        <section className='row'>
          <div className='col-sm-6'>
            <h1>Web developer</h1>
            <p>I write code and hope that machines will not take revenge on programmers one day.</p>
            <RolesChart projects={this.state.projects} />
          </div>

          <div className='col-sm-6'>
            <h1>Fullstack</h1>
            <p>Due to possibilities in a modern javascript I moved from the server side to fullstack.</p>
          </div>
        </section>

        <section>
          <div className='col-sm-9'>
            <h1>Projects</h1>
            <ProjectsChart projects={this.state.projects} />
          </div>

          <div className='col-sm-3'>
            <h1>Skills</h1>
            <SkillsChart skills={this.state.skills} />
          </div>
        </section>

      </div>
    );
  }

}

Portfolio.propTypes = {
  projects: React.PropTypes.array
};

export default Portfolio;

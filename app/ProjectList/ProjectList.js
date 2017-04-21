import React from 'react';
import {importantSkills} from '../settings';

class ProjectList extends React.Component {

  constructor(props) {
    super();
    this.state = {
      buckets: this.calculate(props)
    };
    this.isActive = this.isActive.bind(this);
    this.renderProject = this.renderProject.bind(this);
  }

  calculate(props) {
    // divide projects by year
    let buckets = [];
    props.projects.forEach(project => {
      project.importantSkills = project.skills.filter(skill => importantSkills.indexOf(skill) >= 0);
      project.teamSize = project.teamSize || project.team.length + 1;
      let year = project.end.year();
      let bucket = buckets.find(b => b.year == year);
      if(!bucket) {
        bucket = {year: year, projects: []};
        buckets.push(bucket);
      }
      bucket.projects.push(project);
    });

    // sort
    return buckets.sort((a,b) => b.year - a.year);
  }

  renderProject(project) {
    return (
      <div key={project.id} className='project projectList col-sm-6 col-lg-4'>
        <div className='subtitle'>{project.start.format('YYYY.MM')} - {project.end.format('YYYY.MM')} ({project.durationHuman})</div>

        <strong className='ProjectAndCompanyName'>{[project.company, project.name].filter(e => e).join(': ')}</strong>
        <br />

        {project.description}
        <br />

        {project.link && <a className='projectLink' href={project.link}>{project.link}</a>}
        {project.link && <br />}

        <strong className='role'>{project.role}</strong>
        <br />

        { project.softwareHouse && <span className='subtitle softwareHouseLabel'> Software House: </span> }
        { project.softwareHouse && <strong className='softwareHouse'>{project.softwareHouse}</strong> }
        { project.softwareHouse && <br /> }

        <span className='subtitle teamSizeLabel'>
          team size: {project.teamSize}
        </span>

        <div className='skills'>
          {project.importantSkills.map(skill =>
            <span
              key={skill}
              onMouseEnter={() => this.props.setActive({skill: skill})}
              onMouseLeave={() => this.props.setActive({})}
              className={`skillLabel ${this.isActive(skill) ? 'active' : ''}`}
              >
              {skill}
            </span>
          )}
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className='projectList container'>
        {this.state.buckets.map(bucket =>
          <div key={bucket.year} className='row'>
            <h1>{bucket.year}</h1><br/>
            {bucket.projects.map(this.renderProject)}
          </div>
        )}
      </div>
    );
  }

  isActive(skill) {
    let active = this.props.active;
    if (!active) {
      return false;
    }
    if (active.skill) {
      return skill == active.skill;
    }
    if (active.project) {
      return active.project.skills.indexOf(skill.name) >= 0;
    }
  }

}

ProjectList.propTypes = {
  setActive: React.PropTypes.func,
  active: React.PropTypes.object,
  projects: React.PropTypes.array
};

export default ProjectList;

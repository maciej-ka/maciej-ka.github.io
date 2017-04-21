import React from 'react';
import {importantSkills} from '../settings';

class ProjectList extends React.Component {

  constructor(props) {
    super();
    this.state = {
      buckets: this.calculate(props)
    };
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
      <div key={project.id} className='project col-sm-6 col-lg-4'>
        <div className='subtitle'>{project.start.format('YYYY.MM')} - {project.end.format('YYYY.MM')} ({project.durationHuman})</div>
        <strong>{[project.company, project.name].filter(e => e).join(': ')}</strong>
        {project.link && <div><a href={project.link}>{project.link}</a></div>}
        <div>{project.description}</div>
        <strong>{project.role}</strong>
        {project.softwareHouse && <div>at <strong>{project.softwareHouse}</strong></div>}
        <div>team size: {project.teamSize}</div>
        <div>{project.importantSkills.map(skill => <span key={skill} className='skillLabel'>{skill}</span>)}</div>
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

}

ProjectList.propTypes = {
  projects: React.PropTypes.array
};

export default ProjectList;

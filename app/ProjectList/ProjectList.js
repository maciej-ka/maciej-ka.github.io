import React from 'react';

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
      project.importantSkills = project.skills.filter(skill => props.importantSkills.indexOf(skill) >= 0);
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
      <div key={project.id}>
        <div>{project.start.format('YYYY.MM')} - {project.end.format('YYYY.MM')} ({project.durationHuman})</div>
        <strong>{[project.company, project.name].filter(e => e).join(': ')}</strong>
        {project.link && <div><a href={project.link}>{project.link}</a></div>}
        <div>{project.description}</div>
        <strong>{project.role}</strong>
        {project.softwareHouse && <div>at <strong>{project.softwareHouse}</strong></div>}
        {project.team.map(member => <div key={member}>+ {member}</div>)}
        <div>{project.importantSkills.map(skill => <span key={skill}>{skill}</span>)}</div>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.state.buckets.map(bucket =>
          <div key={bucket.year}>
            <h1>{bucket.year}</h1>
            {bucket.projects.map(this.renderProject)}
          </div>
        )}
      </div>
    );
  }

}

ProjectList.propTypes = {
  projects: React.PropTypes.array,
  importantSkills: React.PropTypes.array
};

export default ProjectList;

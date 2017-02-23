import React from 'react';

class ProjectList extends React.Component {

  constructor(props) {
    super();
    this.state = {
      buckets: this.calculate(props.projects)
    };
  }

  calculate(projects) {
    // divide projects by year
    let buckets = [];
    projects.forEach(project => {
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

  render() {
    return (
      <div>
        {this.state.buckets.map(bucket =>
          <div>
            <h1>{bucket.year}</h1>
            {bucket.projects.map(project =>
              <div>{project.name}</div>
            )}
          </div>
        )}
      </div>
    );
  }

}

ProjectList.propTypes = {
  projects: React.PropTypes.array,
};

export default ProjectList;

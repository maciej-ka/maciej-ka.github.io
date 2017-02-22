import React from 'react';
import moment from 'moment';
import {TimelineChart} from '.';

class ProjectsChart extends React.Component {

  constructor() {
    super();
    this.state = {
      buckets: []
    };
  }

  componentDidMount() {
    this.calculate();
  }

  calculate() {
    // set range of years
    const minDate = moment(Math.min(...this.props.projects.map(p => p.start)));
    const maxDate = moment().add(1, 'year').startOf('year');

    // create bucket per each timeline
    let buckets = [];
    const bucketCount = 1 + this.bucketIndex(minDate.year());
    for(let i = 0; i < bucketCount; i++) {
      buckets.push({
        id: i,
        data: [],
        end: maxDate.clone().subtract(2 * i, 'years'),
        start: maxDate.clone().subtract(2 + 2 * i, 'years')
      });
    }

    // populate buckets
    this.props.projects.forEach(p => {
      this.populateBuckets(p, buckets);
    });
    this.setState({buckets});
  }

  bucketIndex(year) {
    return Math.floor((moment().year() - year) / 2);
  }

  populateBuckets(project, buckets) {
    project = {start: project.start, end: project.end};
    while (project.start < project.end) {
      let bucket = buckets[this.bucketIndex(project.start.year())];
      bucket.data.push({
        start: project.start,
        end: moment.min(project.end, bucket.end)
      });
      project.start = bucket.end;
    }
  }

  render() {
    return (
      <div>
        {this.state.buckets.map(bucket =>
          <TimelineChart
            key={bucket.id}
            id={bucket.id}
            data={bucket.data}
            start={bucket.start}
            end={bucket.end.subtract(1, 'day')}
          />
        )}
      </div>
    );
  }

}

ProjectsChart.propTypes = {
  projects: React.PropTypes.array
};

export default ProjectsChart;

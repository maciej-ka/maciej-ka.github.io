import React from 'react';
import TimelineChart from '../TimelineChart';

class ProjectsChart extends React.Component {

  render() {
    const data = [
      // {start: '2014-01-01', end: '2014-03-01'},
      // {start: '2014-03-01', end: '2014-06-01'},
      // {start: '2014-07-01', end: '2015-06-01'}
      {start: new Date('2014-01-01'), end: new Date('2014-03-01')},
      {start: new Date('2014-03-01'), end: new Date('2014-06-01')},
      {start: new Date('2014-07-01'), end: new Date('2015-06-01')}
    ];

    return (
      <TimelineChart data={data} />
    );
  }

}

ProjectsChart.propTypes = {
  projects: React.PropTypes.array
};

export default ProjectsChart;

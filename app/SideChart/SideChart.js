import React from 'react';
import {monthsToHuman} from '../helpers';

class SideChart extends React.Component {

  constructor(props) {
    super();
    this.state = {};
    this.state.data = this.calculate(props);
    this.state.distance = this.calculateDistance();
  }

  calculate(props) {
    // sum month durations
    let durations={};
    props.projects.forEach(project => {
      let side = project.side || 'other';
      durations[side] = durations[side] || 0;
      durations[side] += project.duration;
    });
    durations['frontend'] += durations['fullstack'];
    durations['backend'] += durations['fullstack'];

    // get max
    let maxDuration=0;
    for(let key in durations) {
      maxDuration = Math.max(maxDuration, durations[key]);
    }
    let maxRadius=Math.sqrt(maxDuration/3.14);

    // set diagram details
    let data={};
    for(let key in durations) {
      let side = {
        subtitle: monthsToHuman(durations[key]),
        radius: Math.sqrt(durations[key]/3.14) / maxRadius
      };
      data[key] = side;
    }

    return data;
  }

  calculateDistance() {
    console.log(this.state);
    return 0;
  }

  render() {
    // radiuses in data are between zero and one
    const scale = 40;
    const data = this.state.data;

    return (
      <svg className='vennDiagram' viewBox='0 0 200 174'>
        <circle cx='40' cy='40' r={data['backend'].radius * scale} />
        <circle cx='40' cy='59' r={data['frontend'].radius * scale} />
        <circle cx='40' cy='107' r={data['mobile'].radius * scale} />
        <circle cx='40' cy='141' r={data['other'].radius * scale} />
        <text x='85' y='25'>backend</text>
      </svg>
    );
  }

}

SideChart.propTypes = {
  projects: React.PropTypes.array
};

export default SideChart;

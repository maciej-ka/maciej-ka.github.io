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

    // get max duration
    let max=0;
    for(let key in durations) {
      max = Math.max(max, durations[key]);
    }

    // calculate normalized values (between zero and one)
    let data={};
    for(let key in durations) {
      data[key] = {
        value: durations[key] / max,
        subtitle: monthsToHuman(durations[key]),
        radius: Math.sqrt(durations[key] / Math.PI) / Math.sqrt(max / Math.PI)
      };
    }

    return data;
  }

  calculateDistance() {
    // find distance between two overlapping circles
    const r1 = this.state.data['backend'].radius;
    const r2 = this.state.data['frontend'].radius;
    const area = this.state.data['fullstack'].value;

    // find intersection height numerically
    let max = Math.min(r1, r2);
    let min = 0;
    let h;
    for(let i = 0; i < 10; i++) {
      h = (max + min) / 2;
      let miss = this.calculateMistake(r1, r2, area, h);
      if (miss < 0) {
        min = h;
      } else {
        max = h;
      }
      console.log(h, miss);
    }

    // convert height of overlap to distance
    return Math.sqrt(h * h - r1 * r1) + Math.sqrt(h * h - r2 * r2);
  }

  calculateMistake(r1, r2, area, h) {
    let result =
      + r1 * r1 * Math.asin(h / r1)
      + r2 * r2 * Math.asin(h / r2)
      - h * (Math.sqrt(r1 * r1 - h * h) + Math.sqrt(r2 * r2 - h * h))
      - area;
    return result;
  }

  render() {
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

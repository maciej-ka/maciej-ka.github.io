import React from 'react';
import {monthsToHuman} from '../helpers';

class SideChart extends React.Component {

  constructor(props) {
    super();
    this.state = {};
    this.state.data = this.calculateData(props);
    this.state.distance = this.calculateDistance();
  }

  calculateData(props) {
    // sum month durations
    let data={};
    props.projects.forEach(project => {
      let side = project.side || 'other';
      data[side] = data[side] || {value: 0};
      data[side].value += project.duration;
    });
    data['frontend'].value += data['fullstack'].value;
    data['backend'].value += data['fullstack'].value;

    // get max value
    let max=0;
    for(let key in data) {
      max = Math.max(max, data[key].value);
    }

    // normalize and add title
    for(let key in data) {
      data[key].subtitle = monthsToHuman(data[key].value);
      data[key].radius = Math.sqrt(data[key].value * Math.PI) / Math.sqrt(max * Math.PI);
      data[key].value = data[key].radius * data[key].radius * Math.PI;
    }

    return data;
  }

  calculateDistance() {
    let min = 0;
    let max = Math.PI;
    let res;

    // interpolate angle
    for(let i = 0; i < 10; i++) {
      let arc = (max + min) / 2;
      res = this.calculateMiss(arc);
      if (res.miss > 0) {
        max = arc;
      } else {
        min = arc;
      }
    }

    // return distance for last angle
    return res.d;
  }

  calculateMiss(alpha) {
    const r1 = this.state.data['backend'].radius;
    const r2 = this.state.data['frontend'].radius;
    const area = this.state.data['fullstack'].value;
    const beta = Math.asin(r2 * Math.sin(alpha) / r1);

    // distance between circles
    let d = r2 * Math.cos(alpha) + r1 * Math.cos(beta);
    // area of intersection
    let miss =
      r2 * r2 * (alpha - Math.sin(alpha) * Math.cos(alpha))
      + r1 * r1 * (beta - Math.sin(beta) * Math.cos(beta))
      - area;
    return {d, miss};
  }

  render() {
    const height = 153;
    const width = 200;
    const scale = 34;

    // scale radiuses
    let r = {};
    for(let key in this.state.data) {
      r[key] = this.state.data[key].radius * scale;
    }

    // space groups evengly across height
    let y = {
      backend: r.backend,
      frontend: r.backend + this.state.distance * scale,
      other: height - r.other
    };
    let gap = height - y.frontend - r.frontend - 2 * (r.mobile + r.other);
    y.mobile = y.frontend + r.frontend + gap / 2 + r.mobile;

    // label

    return (
      <svg className='vennDiagram' viewBox={`0 0 ${width} ${height}`}>
        <circle
          cx={scale}
          cy={r.backend}
          r={r.backend} />

        <circle
          cx={scale}
          cy={y.frontend}
          r={r.frontend} />

        <circle
          cx={scale}
          cy={y.mobile}
          r={r.mobile} />

        <circle
          cx={scale}
          cy={y.other}
          r={r.other} />

        <text x='85' y='25'>backend</text>
      </svg>
    );
  }

}

SideChart.propTypes = {
  projects: React.PropTypes.array
};

export default SideChart;

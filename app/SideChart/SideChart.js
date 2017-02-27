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

    // add title and radius
    for(let key in data) {
      data[key].subtitle = monthsToHuman(data[key].value);
      data[key].radius = Math.sqrt(data[key].value / Math.PI);
    }

    // // get max duration
    // let max=0;
    // for(let key in durations) {
    //   max = Math.max(max, durations[key]);
    // }

    // // calculate normalized values (between zero and one)
    // let data={};
    // for(let key in durations) {
    //   data[key] = {
    //     value: durations[key] / max,
    //     subtitle: monthsToHuman(durations[key]),
    //     radius: Math.sqrt(durations[key] / Math.PI) / Math.sqrt(max / Math.PI)
    //   };
    // }

    // let data={};
    // for(let key in durations) {
    //   data[key] = {
    //     value: durations[key],
    //     subtitle: monthsToHuman(durations[key]),
    //     radius: Math.sqrt(durations[key] / Math.PI)
    //   };
    // }

    return data;
  }

  calculateDistance() {
    let min = 0;
    let max = Math.PI;
    let res;
    for(let i = 0; i < 10; i++) {
      let arc = (max + min) / 2;
      res = this.calculateMiss(arc);
      if (res.miss > 0) {
        max = arc;
      } else {
        min = arc;
      }
      console.log(res.d, res.miss);
    }
    return res.d;
  }

  calculateMiss(alpha) {
    const r1 = this.state.data['backend'].radius;
    const r2 = this.state.data['frontend'].radius;
    const area = this.state.data['fullstack'].value;
    const beta = Math.asin(r2 * Math.sin(alpha) / r1);

    let d = r2 * Math.cos(alpha) + r1 * Math.cos(beta);
    let miss =
      r2 * r2 * (alpha - Math.sin(alpha) * Math.cos(alpha))
      + r1 * r1 * (beta - Math.sin(beta) * Math.cos(beta))
      - area;
    return {d, miss};
  }

  render() {
    const scale = 1;
    const data = this.state.data;
    // position of second circle
    // const cy = (data['backend'].radius + this.state.distance) * scale;

    return (
      <svg className='vennDiagram' viewBox='0 0 20 50'>
        <circle
          cx='10'
          cy={data['backend'].radius * scale}
          r={data['backend'].radius * scale} />

        <circle
          cx='10'
          cy={(data['backend'].radius + this.state.distance) * scale}
          r={data['frontend'].radius * scale} />

        <circle cx='25' cy='107' r={data['mobile'].radius * scale} />
        <circle cx='25' cy='141' r={data['other'].radius * scale} />
        <text x='85' y='25'>backend</text>
      </svg>
    );
  }

}

SideChart.propTypes = {
  projects: React.PropTypes.array
};

export default SideChart;
